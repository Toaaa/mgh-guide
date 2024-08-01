---
prev:
  text: 'Running on Linux'
  link: '/running-mgh-server-linux/'
next:
  text: 'Custom Rules'
  link: '/custom-rules/'
---

# Server File & Folder Structure

Welcome to the guide for Midnight Ghost Hunt's dedicated server file & folder structure. This page helps you understand the important files and folders you’ll need to work with.

## Important Files and Folders

### `CustomRules.ini`
- **Description:** A configuration file where you can set up custom rules for your server.
- **Usage:** Adjust game rules, server settings, and other gameplay elements by editing this file. Make sure to back up before making changes!

<!-- ### `ReadMe_BanList.txt`
- **Description:** A text file that provides information on how to manage banned players and IPs.
- **Usage:** Review this file to understand the process for banning players, ensuring a smoother and fairer gameplay experience. -->

### `ReadMe_CustomRules.txt`
::: warning
At the time of writing, the `ReadMe_CustomRules.txt` file is considered outdated by the community. For the most up-to-date information on configuring custom rules, please refer to the [Custom Rules](../custom-rules/) page.
:::
- **Description:** Instructions and notes on how to configure and use the `CustomRules.ini` file.
- **Usage:** This file guides you through setting up custom rules and understanding what each option does.

::: tip
**The following files are only relevant** if you are running your dedicated server **on Windows**.
:::

### `MidnightGhostHuntServer.exe`
- **Description:** The executable file for launching your Midnight Ghost Hunt dedicated server.
- **Usage:** This is the main file you’ll run to start your server, it also uses [command-line launch options](../command-line-launch-options/). It’s essential for server operation.

### `start_server.bat`
- **Description:** A batch file used to start your Midnight Ghost Hunt server.
- **Usage:** This script simplifies the process of launching your server with the correct parameters.

## Note on Certain Folders

There are several folders that are crucial for the game’s operation or for Steam integration, such as `Engine`, `Steam`, `_CommonRedist` and `MidnightGhostHunt`. **Do not modify or delete any files within these folders** unless you’re following official instructions or troubleshooting specific issues.

## Glossary

### Root Directory
- **Definition:** The root directory is the top-level folder that contains all other folders and files for your server setup. In the context of your Midnight Ghost Hunt server, this is where the main server files are located, including configuration and executable files.
    > [Here](../i/root-folder.png) is an example of how it *might* look.
    > ![Root Folder](../i/root-folder.png)

### Config File
- **Definition:** When documentation or guides here refer to "*the config file*", they are usually talking about `CustomRules.ini`, which is located in the root directory (see above).
- **Description:** This file is central to customizing server settings and rules, so understanding its role and location helps in managing your server effectively.

## Summary

For day-to-day server management, focus on:
- **`CustomRules.ini`** for game rules & configuration. For more information, see [here](../custom-rules/)
<!-- - **`ReadMe_BanList.txt`** and **`ReadMe_CustomRules.txt`** for guidelines and instructions. -->
- **`MidnightGhostHuntServer.exe`** and **`start_server.bat`** for server startup. (For Linux, please refer to *[Running the MGH Dedicated Server on Linux](../running-mgh-server-linux/)*)

By understanding these key components, you’ll be better equipped to configure and maintain your Midnight Ghost Hunt server.

If you have any questions or need further assistance, the community is [here to help](https://discord.gg/midnightghosthunt)!