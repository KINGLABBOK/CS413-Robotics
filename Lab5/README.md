# Lab 5: Motor parameter identification

I held the robot in the air and recorded the angle of each wheel for PWM steps from -100 % to +100 % in 5 % steps (2 s on, 1 s off), following the Experiment design in the Lab 5 README. In the notebook I fit the motor model to every step like in the course notebook, fit w_ss = U / k_e for each wheel and simulate one step with odeint. The motor is not linear at small PWM, the dead zone is smaller than 5 %, and the right wheel is faster at small and middle PWM, so with the same PWM the robot will not drive straight.

- `motor_identification.qrs` - TRIK Studio program (left wheel M4; for the right wheel I only changed the ports and the file name)
- `motor_data/` - raw files from the robot and `battery.txt`
- `report.ipynb` - report with the table, the plots and the conclusions
