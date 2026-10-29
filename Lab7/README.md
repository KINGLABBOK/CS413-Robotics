# Lab 7: Go-to-goal

I drove my 61 as 8 waypoints with the go-to-goal controller from the lecture (K_θ = 100, K_v = 400, v_max = 60, ε = 3 cm), the same program in the simulator and on the real robot, only r and B differ. Both runs reached every waypoint within 3 cm by odometry; the simulator cuts the corners by about 2 cm because of ε, and on the real robot the lines are wavy because K_θ = 100 is a bit high for motors that answer with a delay. By the tape the real robot stopped 26 cm from the last waypoint while its odometry says 2 cm, so the remaining gap is localization, not control.

- `go_to_goal_sim.qrs`, `go_to_goal_real.qrs` - TRIK Studio programs (same blocks and gains; r, B, the file name and the marker differ)
- `odometry_data_sim.txt`, `odometry_data_real.txt` - raw logs (x, y in cm, time in ms)
- `Lab7.ipynb` - notebook with the trajectory plot, the waypoint-miss table, the run times, the tape check and the conclusions
