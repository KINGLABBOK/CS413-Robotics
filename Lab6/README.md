# Lab 6: Localization (odometry)

I drove my digits 61 with motors and timers like in Lab 1, and a parallel task counted the odometry with the formulas from the board and wrote x,y,time to a file. I ran the same program in the simulator and on the real robot: in the simulator it drew the 61, but the real robot turned about 160° instead of 90° and made loops. With a tape I measured the real end point x = -0.39 m, y = -0.09 m, while the last line of the odometry says x = -0.11 m, y = -0.19 m, so the odometry is 0.29 m off.

- `trajectory_sim.qrs`, `trajectory_real.qrs` - TRIK Studio programs (the same blocks; only r and B, the file name and the marker are different)
- `odometry_data_sim.txt`, `odometry_data_real.txt` - raw logs (x and y in m, time in ms)
- `Lab6.ipynb` - notebook with both plots, the errors, the tape comparison and the conclusions
