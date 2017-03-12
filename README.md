This repo is a part of the Software for Portable Devices (CS F314) course.

# Setup

1. Install node.js (v6.x.x LTS) from https://nodejs.org/en/
2. npm should also have been installed. Run `npm install npm@latest -g` to update npm to the latest version.
3. Run `git clone https://github.com/thepulkitagarwal/sdpd-t-rex-runner.git` or download a zip of this repository.
4. `cd` into the local copy of this repo on your terminal.
5. Run `npm install`.
6. Run `npm start`.
7. Open a separate terminal, `cd` into the local copy of this repo, and run `python raspiController.py`.
8. Open your browser and go to <http://localhost:3000> and press space.
9. The TRex should automatically jump every 0.5 seconds.
10. Make changes in the `raspiController.py` file to interface to the raspberry pi.
