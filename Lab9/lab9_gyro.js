// Lab 9 - gyroscope parameters. The robot only logs, all processing is done in Colab.
// 1) warm-up 2 min (not logged)  2) static 3 min  3) rotation, Option A: sin 36 s, rect 36 s  4) rest 3 s
// Log: lab9_gyro.csv, one line every ~10 ms:
// t_us = read()[3], gz_cal = read()[2], encL = E4, encR = E3, gz_raw = readRawData()[2], u = motor power, t_ms, phase

var FILE = "/home/root/trik/scripts/lab9_gyro.csv";
var buf = "";
var n = 0;
var t0 = 0;

function show(text) {
	brick.display().addLabel(text + "                    ", 1, 1);
	brick.display().redraw();
}

function logLine(u, phase) {
	var g = brick.gyroscope().read();
	var raw = brick.gyroscope().readRawData();
	buf += g[3] + "," + g[2] + "," + brick.encoder("E4").read() + "," + brick.encoder("E3").read() + ","
		+ raw[2] + "," + u + "," + (script.time() - t0) + "," + phase + "\n";
	n = n + 1;
	if (n % 100 == 0) {          // write in blocks, not every sample
		script.writeToFile(FILE, buf);
		buf = "";
	}
}

function setU(u) {                // in-place rotation: right wheel u, left wheel -u
	brick.motor("M3").setPower(u);
	brick.motor("M4").setPower(-u);
}

function sat(v) {                 // motor limit +-100 %
	return Math.max(-100, Math.min(100, v));
}

function still(ms, phase) {       // robot still, logging
	var end = script.time() + ms;
	while (script.time() < end) {
		logLine(0, phase);
		script.wait(10);
	}
}

var main = function()
{
	setU(0);
	script.removeFile(FILE);
	brick.encoder("E3").reset();
	brick.encoder("E4").reset();
	t0 = script.time();
	script.writeToFile(FILE, "t_us,gz_cal,encL,encR,gz_raw,u,t_ms,phase\n");

	// 1. warm-up, 2 min, not logged
	brick.playTone(1000, 200);
	var end = script.time() + 120000;
	while (script.time() < end) {
		show("warmup " + Math.round((end - script.time()) / 1000) + " s");
		script.wait(1000);
	}

	// 2. static, 3 min, logged
	brick.playTone(1000, 200);
	show("static 3 min");
	still(180000, "static");

	// 3. rotation: T = 4 s, amplitude 30 -> 60 -> 150 % (3 periods each), clipped to +-100 %
	var T = 4000;
	var amps = [30, 60, 150];
	var names = ["sin", "rect"];
	for (var p = 0; p < 2; p++) {
		brick.playTone(1500, 200);
		show(names[p]);
		var start = script.time();
		var tt = 0;
		while (tt < 9 * T) {
			var A = amps[Math.floor(tt / (3 * T))];
			var s = Math.sin(2 * Math.PI * tt / T);
			var f = s;
			if (p == 1) {
				f = (s >= 0) ? 1 : -1;
			}
			var u = sat(A * f);
			setU(u);
			logLine(u, names[p]);
			script.wait(10);
			tt = script.time() - start;
		}
	}
	setU(0);

	// 4. rest, 3 s, logged
	still(3000, "rest");
	script.writeToFile(FILE, buf);
	buf = "";
	show("done");
	brick.playTone(1000, 800);
	script.wait(1000);
	return;
}
