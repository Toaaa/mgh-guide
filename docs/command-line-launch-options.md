# Command Line Launch Options

To launch the game server, use the following command line options:

::: tip
On Windows, these options can be changed in the file `start_server.bat`, which is located in the [root of your server directory](./server-structure#root-directory).

For Linux, please refer to our guide on [How to run on linux](./running-mgh-server-linux)
:::

### Required Parameters
- `-log`  
  Displays the console window with logging.

- `-map="Asylum"`  
  Sets the map on which the dedicated server will move after it is created. Available maps include:
  - Mansion
  - Asylum
  - Theatre
  - Museum
  - Ghost Ship
  - Carnival
  - School
  - Graveyard
  - Doll Factory
  - Mall

- `-gamemode="4v4 Hunt"`  
  Sets the game mode. Available game modes include:
  - 4v4 Hunt
  - 6v6 Hunt
  - Darkness

- `-gamename="Dedicated Server 01"`  
  Sets the server name in the server list (must be longer than 3 characters).

### Optional Parameters
- `-region="Western Europe"`  
  Sets the region of the dedicated server. Available regions include:
  - North America
  - South America
  - Western Europe
  - Northern Europe
  - Eastern Europe
  - Middle East
  - Asia
  - Africa
  - Oceania

- `-BotDifficulty="Auto"`  
  Sets the difficulty level for bots. The `Auto` option takes the average player level in the server to determine difficulty. Available difficulty levels include:
  - Easy
  - Normal
  - Hard
  - Auto

- `-password="test"`  
  Sets the server password.

- `-NoBots`  
  Disables bots.

- `-NoAutobalance`  
  Disables autobalance.

- `-port=8000`  
  Overrides the standard port (7777) with the a specified one (`8000` in this case).

- `-BeaconPort=8001`  
  Overrides the standard port (7787) with the a specified one (`8001` in this case).

If you have any questions or need further assistance, the community is [here to help](https://discord.gg/midnightghosthunt)!