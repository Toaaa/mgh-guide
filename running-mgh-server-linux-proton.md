# Running the MGH Dedicated Server on Linux using Proton

## What is Proton?

Proton is a compatibility layer developed by Valve that allows Windows games to run on Linux through Steam. It combines technologies from [Wine](https://www.winehq.org/) and other tools to provide a seamless experience for running Windows games and applications on a Linux system.

In this case, Proton enables us to run the server binary, a Windows executable, on Linux.

# Requirements

To run the Midnight Ghost Hunt server on Linux using Proton, ensure you have the following installed:

- **Proton**: See above.
- **Steam**: The plattform that provides access to Proton and manages game installations.
- **Midnight Ghost Hunt**: The game itself, installed and available through Steam.

Make sure all these components are properly set up before attempting to run the server.

## Running the Server

To run the server on Linux using Proton, you’ll need to use the provided launch command. This command sets up the server in server mode and provides various parameters to configure your game server.

### Launch Command

Below you will find an launch command example to start the server:

```bash
proton run MidnightGhostHunt/Binaries/Win64/MidnightGhostHuntServer-Win64-Shipping.exe -server -log -port={SERVER_PORT} -queryport={QUERY_PORT} -BeaconPort={BEACON_PORT} -multihome=0.0.0.0 -Map={MAP} -Gamename="{GAME_NAME}" -Gamemode="{GAME_MODE}" -Region="{REGION}" -BotDifficulty="{B_DIFFICULTY}" -password="{PASSWORD}" {ADDITIONAL_ARGS} & GH_PID=$!; sleep 1; tail -c0 -F {PATH_TO}/MidnightGhostHunt/Saved/Logs/MidnightGhostHunt.log --pid=$GH_PID
```
> This command contains some mandatory launch parameters. For more information on what each parameter means, please refer to the [Command Line Launch Options](/command-line-launch-options) page.

After executing the command, the server will start, and the log will be monitored in real-time in your terminal of choice. The tail command follows the log file and displays updates, which is useful for troubleshooting and monitoring server status.

## Summary
By using Proton, you can easily run the Midnight Ghost Hunt dedicated server on a Linux-based system. Ensure you replace placeholders in the command with actual values relevant to your server configuration. For further customization and troubleshooting, refer to the command line documentation linked above.

If you have any questions or need further assistance, the community is [here to help](https://discord.gg/midnightghosthunt)!