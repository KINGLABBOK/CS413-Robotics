# Lab 1 - Trajectory 61

I could not get the real robot to drive the trajectory, so I have no video and nothing real to compare with the simulator.
The real program is the simulator one with two changes: the motors are on ports M1/M2 instead of M3/M4, and all times are recalculated for the bigger wheels and the wider robot (×0.65 for straights, ×0.84 for turns).
My guess is that even then the real 61 would come out crooked, because the program only counts time and never checks where the robot actually is.
A real motor's speed depends on the battery, two motors are never exactly the same, and the wheels slip in turns, while in the simulator none of this happens.
Each small mistake carries over to the next segment, so the corners of the 61 would not close.
