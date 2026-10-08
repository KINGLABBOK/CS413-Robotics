# Lab 4: Line following race

The task was to drive the line as fast as possible with a nonlinear controller. In the simulator the robot goes at full speed and steers with P plus a cube term (the nonlinear part), so a small error gives a soft turn and a big error gives a strong turn. On the real robot I used PID, and the nonlinear part is the speed `v = base - Ks * abs(err)`, so it slows down when the error is big and finished the lap in about 45 seconds.

## Real robot (line_real.qrs)

Settings block (runs once):

```
left = sensorA4;
right = sensorA3;
Kp = 0.8;
Ki = 0.01;
Kd = 10;
base = 70;
Ks = 0.8;
integral = 0;
old = 0;
v = base;
```

Loop:

```
err = (sensorA4 - left) - (sensorA3 - right);
p = Kp * err;
integral = integral + err * 0.01;
integral = max(-200, min(200, integral));
i = Ki * integral;
d = Kd * (err - old) / 10;
u = p + i + d;
old = err;
v = base - Ks * abs(err);

motor M3 = v + u;
motor M4 = v - u;
timer 1 ms;
```

## Simulator (line_sim.qrs)

Settings block (runs once):

```
left = sensorA1;
right = sensorA2;
v = 100;
Kp = 3;
Kc = 0.003;
```

Loop:

```
err = (sensorA2 - left) - (sensorA1 - right);
u = Kp * err + Kc * err * err * err;

motor M3 = v + u;
motor M4 = v - u;
timer 30 ms;
```
