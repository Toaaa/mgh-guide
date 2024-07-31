# Running the MGH Dedicated Server on Linux

There are many different approaches to run the MGH Dedicated Server on Linux. We will present the 2 most common ones here. The first is fairly straightforward, while the other is aimed at more experienced Linux users.

## Prerequisites

No matter which of the two options you choose, you should fulfill the following requirements before we start:

- At least Debian 10 “buster” or higher or equivalent.
- A stable internet connection
- At least 4GB of free RAM
- At least 5GB of free disk space (preferably SSD)
- At least 2 CPU cores
- 64-bit processor and operating system

Additionally, you should have the following ports open in your network and on your machine:

| Usage      | Port (default) |
|-----------|---------|
| Game      | 7777    |
| Query     | 27015   |
| Beacon    | 7787    |

## Using Proton

### What is Proton?

Proton is a compatibility layer developed by Valve that allows Windows games to run on Linux through Steam. It combines technologies from [Wine](https://www.winehq.org/) and other tools to provide a seamless experience for running Windows games and applications on a Linux system.

In this case, Proton enables us to run the server binary, a Windows executable, on Linux.

### Requirements

To run the Midnight Ghost Hunt server on Linux using Proton, ensure you have the following installed:

- **Proton**: See above.
- **Steam**: The plattform that provides access to Proton and manages game installations.
- **Midnight Ghost Hunt**: The game itself, installed and available through Steam.

Make sure all these components are properly set up before attempting to run the server.

### Running the Server

To run the server on Linux using Proton, you’ll need to use the provided launch command. This command sets up the server in server mode and provides various parameters to configure your game server.

#### Launch Command

Below you will find an launch command example to start the server:

```bash
proton run MidnightGhostHuntServer.exe -log -port={SERVER_PORT} -queryport={QUERY_PORT} -BeaconPort={BEACON_PORT} -multihome=0.0.0.0 -Map={MAP} -Gamename="{GAME_NAME}" -Gamemode="{GAME_MODE}" -Region="{REGION}" -BotDifficulty="{B_DIFFICULTY}" -password="{PASSWORD}" {ADDITIONAL_ARGS} & GH_PID=$!; sleep 1; tail -c0 -F {PATH_TO}/MidnightGhostHunt/Saved/Logs/MidnightGhostHunt.log --pid=$GH_PID
```
> This command contains some mandatory launch parameters. For more information on what each parameter means, please refer to the [Command Line Launch Options](./command-line-launch-options) page.

After executing the command, the server will start, and the log will be monitored in real-time in your terminal of choice. The tail command follows the log file and displays updates, which is useful for troubleshooting and monitoring server status.

### Summary
By using Proton, you can easily run the Midnight Ghost Hunt dedicated server on a Linux-based system. Ensure you replace placeholders in the command with actual values relevant to your server configuration. For further customization and troubleshooting, refer to the command line documentation linked above.

If you have any questions or need further assistance, the community is [here to help](https://discord.gg/midnightghosthunt)!

## Using Pterodactyl/Pelican

### What is Pterodactyl/Pelican?

**Pterodactyl** is a stable, production-ready game server management panel that was discontinued on May, 2024. It allows users to manage game servers through an intuitive web interface, providing extensive support for various games, and is well-suited for high-availability and production environments.

**Pelican** is the successor to Pterodactyl, currently in an unstable beta state. It is designed to eventually replace Pterodactyl, offering improved features and performance. However, due to its beta status, it is not yet recommended for critical production use.

### Requirements
For the requirements, select which panel you have or want and select the corresponding documentation.
- [Pterodactyl Documentation](https://pterodactyl.io/panel/getting_started.html)
- [Pelican Documentation](https://pelican.dev/docs/)

### Running the Server
#### Get an egg and import it
First you need to download the egg that matches your panel and import it. For the Pterodactyl egg click [here](/f/eggs/egg-pterodactyl-midnight-ghost-hunt.json) and for the Pelican egg click [here](/f/eggs/egg-pelican-midnight-ghost-hunt.json).

::: tip
If you don't know how to download the egg, open the link to the egg and press `right-click` and `save as` or `CTRL + S`.
:::

Next, you need to import the egg into the panel of your choice.
In Pterodactyl, navigate to your admin interface, go to “Nests” and press the “Import Egg” button. Then select the JSON file of the egg, select any nest and import it.

- In Pelican, navigate to your admin interface, go to “Eggs” and press the “Import” button. Then select the JSON file of the egg and import it.

Now you can go to the next step and create your server.

::: info
Please note that Pelican and it's Eggs are still in an unstable beta state and may change in the future. If you have problems with the Pelican Panel, we recommend that you ask for help in [their discord server](https://discord.gg/pelican-panel).
:::

---

#### Setting-up the server


##### Pterodactyl
To set up a server in Pterodactyl, go to your admin interface, go to “Servers” and press the “Create New” button. Fill in the mandatory fields and select your egg. You can now configure your server under “Service Variables”.

##### Pelican
To set up a server in Pelican, go to your admin interface, go to “Servers” and press the “Create Server” button. Fill in the mandatory fields and select your egg. You can now configure your server under “Egg Variables”.

> For more information about these variables, please refer to the [Custom Rules](./custom-rules) page.

---

### Summary
By using Pterodactyl or Pelican, you can efficiently manage and run your Midnight Ghost Hunt dedicated server on a Linux-based system through an intuitive web interface.

While Pterodactyl is a stable, production-ready option, Pelican offers improved features but is still in an unstable beta state (*However, it should be chosen over pterodactyl as soon as it leaves beta.*).

For detailed instructions and troubleshooting, refer to the respective documentation and community resources.

If you have any questions or need further assistance, the community is [here to help](https://discord.gg/midnightghosthunt)!