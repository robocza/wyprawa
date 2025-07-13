Start docker containers

```bash
docker compose build
docker compose up -d
```

Get into docker

```bash
docker exec -it --user 1000:1000 wyprawa-robocza-node fish
```

Install dependencies

```bash
npm run install
```

Run project (inside docker)

```bash
npm run dev
```

Test locally Netlify functions (using Netlify CLI)

```bash
netlify dev -c "npm run dev" --targetPort 3001
```

Build your production site to `./dist/`

```bash
npm run build
```
