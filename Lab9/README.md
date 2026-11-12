# Lab 9: Gyroscope parameters

I logged the TRIK gyroscope for 3 min at rest and then for 72 s of in-place rotation (Option A: sin and rect, T = 4 s, 30 → 60 → 150 %), together with both encoders. At rest the offset is 1.05 deg/s and falls by 0.04 deg/s per minute, the noise is 0.079 deg/s and the resolution 0.00875 deg/s; without calibration the heading runs away by 60° per minute. The gyro stops at ±286 deg/s, which the robot passes at full power, and below this limit it shows about 9 % more rotation than the encoders in both directions.

- `lab9_gyro.js` - the program that ran on the robot (the README asks for `readRawData()`, and the blocks cannot read it)
- `lab9_gyro.qrs` - the same sequence in TRIK Studio blocks, checked in the 2D simulator
- `lab9_gyro.csv` - raw log with all phases; slip check with a tape measure: the robot stopped 13.9° clockwise from its start heading
- `Lab9.ipynb` - notebook with the plots, `calibrate_gyro()`, `gyro_sim()`, the parameter table and the short analysis
