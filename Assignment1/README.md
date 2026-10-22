# Assignment 1: Motor parameter identification

I held the robot in the air and recorded both drive motors with two block programs: a step series from −100 % to +100 % (run twice on the left motor), a fine series for the dead zone, and a square wave and a chirp at 60 %. In the notebook I fit the first-order model to every step, plot the speed and the time constant against PWM, simulate the motor on the square wave and the chirp, and look for artifacts in the data. With the dead zone and a separate line for each direction the model reaches an 86–91 % speed fit on the square wave, but the time constant is not constant and the two motors and directions are different.

- `motor_steps.qrs`, `motor_signal.qrs` - TRIK Studio programs
- `motor_data/` - raw files from the robot and `battery.txt`
- `robotics_lab5_240061.ipynb` - notebook with the processing, the plots and the report
