---
prev:
  text: 'Server files & directories'
  link: '/server-structure/'
next:
  text: 'Command Line Launch Options'
  link: '/command-line-launch-options/'
---

# Custom Rules

The `CustomRules.ini` file is located in the [root of your server directory](../server-structure/#root-directory) and allows for advanced customization of the dedicated server.

Below are all available options:

### Boolean Options

- `Custom - ForceChooseTeam=False`  
  Forces players to choose a team.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - GhostsReviveAfterMidnight?=False`  
  Allows ghosts to revive after midnight.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - Limited UI Mode=False`  
  Enables limited UI mode.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - Revives Disabled=False`  
  Disables revives.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - Hunter - Use Max Player Count=False`  
  Enforces max player count for hunters.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - Ghost - Use Max Player Count=False`  
  Enforces max player count for ghosts.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - All Loadout Unlocked=False`  
  Unlocks all loadouts.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - Mystery Loadout=False`  
  Enables mystery loadout.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - Allow Ghost Respawns=False`  
  Allows ghost respawns.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - Allow Hunter Respawns=False`  
  Allows hunter respawns.  
  Possible Values: `True`, `False`
  Default: `False`

- `Custom - Disable Life Reserve System?=False`  
  Disables the life reserve system.  
  Possible Values: `True`, `False`  
  Default: `False`

- `Custom - Self-Damage When Hit Lvlprop?=False`  
  Enables self-damage when hitting level props.  
  Possible Values: `True`, `False`  
  Default: `False`

### Integer Options

- `Custom - PreMatchTime=90`  
  Sets the pre-match time.  
  Possible Values: Any positive integer 
  Default: `90`

- `Custom - MidnightTime=180`  
  Sets the time at which midnight occurs.  
  Possible Values: Any positive integer 
  Default: `180`

- `Custom - PostMidnightTime=60`  
  Sets the post-midnight time.  
  Possible Values: Any positive integer 
  Default: `60`

- `Custom - Hunter - Max Player Count=8`  
  Sets the maximum player count for hunters.  
  Possible Values: Any positive integer 
  Default: `8`

- `Custom - Ghost - Max Player Count=8`  
  Sets the maximum player count for ghosts.  
  Possible Values: Any positive integer 
  Default: `8`

- `Custom - Ghost - Max Respawn Count=3`  
  Sets the maximum respawn count for ghosts.  
  Possible Values: Any positive integer 
  Default: `3`

- `Custom - Hunter - Max Respawn Count=3`  
  Sets the maximum respawn count for hunters.  
  Possible Values: Any positive integer 
  Default: `3`

- `Custom - Hunter - Self-Damage Lvlprop Amount=10`  
  Sets the amount of self-damage when hitting level props.  
  Possible Values: Any positive integer 
  Default: `10`

### Float Options

- `Custom - Ghost Ability Cooldown Multiplier=5.5`  
  Sets the multiplier for ghost ability cooldown.  
  Possible Values: Any positive float 
  Default: `1.0`

- `Custom - Ghost Movement Speed Multiplier=1.2`  
  Sets the multiplier for ghost movement speed.  
  Possible Values: Any positive float 
  Default: `1.0`

- `Custom - Hunter Movement Speed Multiplier=1.2`  
  Sets the multiplier for hunter movement speed.  
  Possible Values: Any positive float 
  Default: `1.0`

- `Custom - Ghost Slingshot Multiplier=2.0`  
  Sets the multiplier for ghost slingshot.  
  Possible Values: Any positive float 
  Default: `1.0`

- `Custom - Hunter Health Modifier=1.0`  
  Sets the modifier for hunter health.  
  Possible Values: Any positive float 
  Default: `1.0`

- `Custom - Ghost Health Modifier=1.0`  
  Sets the modifier for ghost health.  
  Possible Values: Any positive float 
  Default: `1.0`

- `Custom - Ecto Build Up Speed Multiplier=1.0`  
  Sets the multiplier for ecto build-up speed.  
  Possible Values: Any positive float 
  Default: `1.0`

- `Custom - Unpossessed Prop Health Multiplier=1.0`  
  Sets the multiplier for unpossessed prop health.  
  Possible Values: Any positive float 
  Default: `1.0`

- `Custom - Hunter Gadget Count Multiplier=1.0`  
  Sets the multiplier for hunter gadget count.  
  Possible Values: Any positive float 
  Default: `1.0`

### String Options
- `AdminPUIDs=00026ac36798400dac190f6ce446f7d7`
  Sets the admin player unique ID(s).
  ::: info
  The unique ID should be your PUID (example: `00026ac36798400dac190f6ce446f7d7`). To assign multiple admin IDs, separate them with commas (example: `00026ac36798400dac190f6ce446f7d7,1234567890abcdef1234567890abcdef`).
  :::

### Array Options

- `BannedHunterWeaponGadgets=[Spectral Cannon, Radar]`  
  Bans specific hunter weapon gadgets. Available gadgets include:
  - Spectral Cannon
  - Radar
  - Pathfinder
  - Trap
  - Grenade
  - Defibrillator
  - Project X
  - Harpoon Bazooka
  - Sledgehammer
  - Reaper
  - Grappling Hook
  - Vacuum
  - Salt Shotgun
  - Spectrophone
  - Frostbite
  - C4
  - Riot Shield
  - Medic Kit
  - Flamethrower
  - Ghostsmasher
  - CamCorder 
  
  Default: `None`

- `BannedHunterPerks=[Lightweight, Juggernaut]`  
  Bans specific hunter perks. Available perks include:
  - Lightweight
  - Juggernaut
  - Coldblooded
  - Healing Aura
  - Quick Reload
  - Extended Mag
  - Extra Gear
  - Gadgeteer
  - Overkill
  - Beserk  
  
  Default: `None`

- `BannedGhostAbilities=[Doppelganger, Phantom]`  
  Bans specific ghost abilities. Available abilities include:
  - Doppelganger
  - Phantom
  - Telekinesis
  - Corruptor
  - Spirit
  - Miasma
  - Apparition
  - Death Grip
  - Poltergeist
  - Trickster
  - Deflector
  - Copycat 
  
  Default: `None`

- `BannedGhostHaunts=[Chill, Cold Spot]`  
  Bans specific ghost haunts. Available haunts include:
  - Chill
  - Cold Spot
  - False Trail
  - Push Object
  - Medium
  - Health Orb
  - Shove Hunter
  - Hallucinate 
  
  Default: `None`

- `BannedGhostPerks=[Heavyweight, Ghostly Reach]`  
  Bans specific ghost perks. Available perks include:
  - Heavyweight
  - Ghostly Reach
  - Shatterproof
  - Ghostly Focus
  - Foreseer
  - Perception
  - Untrappable
  - Ecto-slow
  - Glutton
  - Blast Resistant
  - Quickcharge
  - Ecto-rush 
  
  Default: `None`

### Map-Specific Modifiers
- `CustomDamageMods={"Spectral Cannon": 5.5}`  
  Sets custom damage modifiers for specific methods. Available methods include:
  - Spectral Cannon
  - Grenade
  - Ghostsmasher
  - Project X
  - Trap
  - Poltergeist
  - Ghost Attack
  - Doppelganger
  - Harpoon Bazooka
  - Miasma Burn
  - Sledgehammer
  - Reaper
  - Reaper Bolt Explosion
  - Salt Shotgun
  - Ghost Punch
  - Ship Cannon
  - Corruption
  - Chest Bite
  - Frostbite
  - Telekinesis
  - C4
  - Reaper Bolt Zap
  - Harpoon Bazooka Zap
  - Riot Shield Bash
  - Flamethrower
  - Gargoyle Attack
  - Forklift Attack
  - Knight Sword
  - Fridge Attack
  - Door Attack
  - T-Rex Bite
  - Skeleton Attack
  
  Default: `None`

### Example Configuration
```ini
[/Game/AssetPacks/ProMainMenu/Blueprints/BP_MGH_Instance.BP_MGH_Instance_C]
AdjustedPlayerVolumes=(("ERROR, BAD UNIQUE NET ID", 0.000000),("76561198434290001", 0.000000),("76561197960447094", -13.909749))
Custom - ForceChooseTeam=False
Custom - PreMatchTime=30
Custom - MidnightTime=30
Custom - PostMidnightTime=30
Custom - GhostsReviveAfterMidnight?=False
Custom - Ghost Ability Cooldown Multiplier=1.200000
Custom - Ghost Movement Speed Multiplier=1.200000
Custom - Hunter Movement Speed Multiplier=1.200000
Custom - Limited UI Mode=False
Custom - Revives Disabled=False
Custom - Hunter - Use Max Player Count=False
Custom - Ghost - Use Max Player Count=False
Custom - Hunter - Max Player Count=0
Custom - Ghost - Max Player Count=0
Custom - All Loadout Unlocked=True
Custom - Mystery Loadout=False
Custom - Ghost Slingshot Multiplier=0.000000
Custom - Allow Ghost Respawns=True
Custom - Ghost - Max Respawn Count=0
Custom - Allow Hunter Respawns=False
Custom - Hunter - Max Respawn Count=0
Custom - Disable Life Reserve System?=False
Custom - Hunter Health Modifier=1.200000
Custom - Ghost Health Modifier=1.200000
Custom - Ecto Build Up Speed Multiplier=1.200000
Custom - Unpossessed Prop Health Multiplier=1.200000
Custom - Hunter Gadget Count Multiplier=1.200000
Custom - Self-Damage When Hit Lvlprop?=False
Custom - Hunter - Self-Damage Lvlprop Amount=0
CustomDamageMods=()
AdminPUIds=00026ac36798400dac190f6ce446f7d7
```

If you have any questions or need further assistance, the community is [here to help](https://discord.gg/midnightghosthunt)!
