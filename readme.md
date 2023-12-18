# Welcome to Monorepo setup of React and Node with Lerna

## First initialize Lerna and install it

First run a command to initialize lerna 

```bash
npx lerna init --dryRun
```

Run a command in terminal

```bash
npx lerna init --packages="packages/*"
```

Or you can manually update a `packege.json` file

```json
{
    ...
    "workspaces": [
        "packages/*"
    ],
    ...
}
```

now create a `packages` in your root dir.

```bash
--packeges
--.gitignore
--package.json
```

now create a two folders one for **client** and another for **server**

```bash
...

--packeges
----client
----server
...
```

## Now Commands you need to understand

```bash
...

"scripts": {
    "start": "lerna run start",
    "dev": "lerna run dev"
}

...
```

make sure your dedicated `server` and `client` folder `packege.json` files contain same scripts 

### If you need to scope a comman to run only server or client at a time

```bash
...

"scripts": {
    ...
    "test:server" : "lerna run text --scope=server",
    ...
}

...
```
