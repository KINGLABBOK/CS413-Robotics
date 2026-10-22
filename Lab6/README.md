# Lab 6: Localization (odometry)

I drove my digits 61 with motors and timers like in Lab 1, and a parallel task counted the odometry with the formulas from the board and wrote x,y,time to a file. In the simulator the 61 came out right, but the real robot is faster and with the same timers turned far more than 90°, so on the real robot I shortened the turns to 550 ms (850 ms for the 135° turn) and used r = 0.0375 m. Now its corners are 93–100°, the 61 is about twice as big and bends to the left because the right motor is faster, and the final error between the simulator and the real robot is 0.2 m.

- `trajectory_sim.qrs`, `trajectory_real.qrs` - TRIK Studio programs (the same blocks; r and B, the turn timers, the file name and the marker are different)
- `odometry_data_sim.txt`, `odometry_data_real.txt` - raw logs (x and y in m, time in ms)
- `Lab6.ipynb` - notebook with both plots, the errors and the conclusions
