# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.3](https://github.com/ljharb/listify/compare/v1.0.2...v1.0.3) - 2020-05-03

### Commits

- [Robustness] remove `has`; call-bind all prototype methods [`303d9cd`](https://github.com/ljharb/listify/commit/303d9cdb74b5ec989a40537b86fed51a7e1f8046)

## [v1.0.2](https://github.com/ljharb/listify/compare/v1.0.1...v1.0.2) - 2020-05-01

### Fixed

- Revert "[Robustness] use `string.prototype.trim`" [`#9`](https://github.com/ljharb/listify/issues/9)

### Commits

- [eslint] fix errors [`d0a98dd`](https://github.com/ljharb/listify/commit/d0a98dde40cac76992340f7532f0a10039f48d03)
- [Dev Deps] update `aud`, `tape` [`651ba36`](https://github.com/ljharb/listify/commit/651ba36a939c287ef1e9d7519979fac4b03dd6fd)

## [v1.0.1](https://github.com/ljharb/listify/compare/v1.0.0...v1.0.1) - 2020-04-11

### Commits

- [Tests] use shared travis-ci configs [`7d9a712`](https://github.com/ljharb/listify/commit/7d9a7124620fde07811f9e42c5595fdc1cd5fae0)
- [Tests] up to `node` `v12.6`, `v11.15`, `v10.16`, `v9.11`, `v8.16`, `v7.10`, `v6.17`, `v5.12`, `v4.9`, `iojs-v3.3`; use `nvm install-latest-npm` [`d72fb2e`](https://github.com/ljharb/listify/commit/d72fb2eb6ba689f457c9218ad34834d80ec5797a)
- [Tests] remove `jscs` [`1479506`](https://github.com/ljharb/listify/commit/147950636f3e53f0ae134914049c6951d493ebb7)
- Using my standard jscs.json [`0eb58fd`](https://github.com/ljharb/listify/commit/0eb58fdf457f889293d602d8792232956733f71b)
- Adding `npm run lint` [`c7f45d9`](https://github.com/ljharb/listify/commit/c7f45d96bc0bfab3eea713b97c24346535c6933e)
- [meta] add `auto-changelog` [`be596c1`](https://github.com/ljharb/listify/commit/be596c172f88a831067142013f6eef8c75565a81)
- Update `tape`, `covert`, `jscs` [`58ec7b4`](https://github.com/ljharb/listify/commit/58ec7b4e714c9a0e7e749a3ee6f7d8fd17fc31a8)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `covert`, `tape` [`d905bbc`](https://github.com/ljharb/listify/commit/d905bbcb17ef04578c0c4356fb0d0d72e2e755ac)
- Test on `io.js` [`4d11405`](https://github.com/ljharb/listify/commit/4d11405fb627e149acd5ee4ad271ec87a5a875e7)
- Update `tape`, `jscs` [`ac9236a`](https://github.com/ljharb/listify/commit/ac9236aec2de8461465f1c438a0519448881d7ff)
- Add `npm run eslint` [`d27cee1`](https://github.com/ljharb/listify/commit/d27cee19f774426004b60c8285e48ce36e8669ae)
- [actions] add automatic rebasing / merge commit blocking [`c446f23`](https://github.com/ljharb/listify/commit/c446f23c307b843c18818bba7bb10a671bef577a)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`; add `safe-publish-latest` [`75a713e`](https://github.com/ljharb/listify/commit/75a713e7a0a9b4c4ba9cf779f03453bbe461c6a6)
- [Dev Deps] update `tape`, `eslint`, `jscs` [`30cac3a`](https://github.com/ljharb/listify/commit/30cac3a7a1e5f28aaa2c40ab02f00a8e18784c58)
- iNaming deps/devDeps URLs in README [`d474a56`](https://github.com/ljharb/listify/commit/d474a56ff8f4daa978c6e4d05c0922d8bc01c462)
- [Tests] up to `node` `v12.11` [`dd857f0`](https://github.com/ljharb/listify/commit/dd857f0a24c4254479c93e3524d2dc4ea6b49614)
- [meta] add FUNDING.yml [`d7ee847`](https://github.com/ljharb/listify/commit/d7ee847d6e3e24c1c1132e2718dd0f7253fb0cd3)
- [Tests] add some tests around whitespace [`77e4f83`](https://github.com/ljharb/listify/commit/77e4f83d1b598016d129f0963c31b116536c5d3b)
- [Tests] use `npx aud` instead of `nsp` or `npm audit` with hoops [`4572df1`](https://github.com/ljharb/listify/commit/4572df1059c6eaea696dbe447ccd0f694a83b98a)
- Use `has` instead of unreliable `hasOwnProperty` check. [`fd66deb`](https://github.com/ljharb/listify/commit/fd66deb6104a1b164d1f4f2f194039bdf53a5f91)
- Test up to `io.js` `v2.5` [`39bda02`](https://github.com/ljharb/listify/commit/39bda02037a617a5c853b747607e6b578b955eb1)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`, `tape` [`0d3cd67`](https://github.com/ljharb/listify/commit/0d3cd678519bd619230959776c3383ca1520cb6c)
- [Robustness] use `string.prototype.trim` [`f645b49`](https://github.com/ljharb/listify/commit/f645b490bb5e223c567acf102fb9ae87f2b5e6c6)
- Add `npm run security` [`d6b897d`](https://github.com/ljharb/listify/commit/d6b897d9af459fe3ac7d29e1d30e054151f2ab1f)
- Naming travis-ci URLs in README [`63f7007`](https://github.com/ljharb/listify/commit/63f700747a7e06aebf53d0c92aaa8bf7a7dade17)
- [Tests] add `npm run tests-only`; clean up scripts [`1c83511`](https://github.com/ljharb/listify/commit/1c83511b15c8ec9f7077b94a767c90e96fc68e35)
- Only apps should have lockfiles [`7b0c71a`](https://github.com/ljharb/listify/commit/7b0c71a2f67cbd3d5c0582b9cb046bd0e9986c62)
- All grade A-supported `node`/`iojs` versions now ship with an `npm` that understands `^`. [`11d3a87`](https://github.com/ljharb/listify/commit/11d3a87df151d2bdbd21dcbc9fe709b0f1ab6428)
- Run `travis-ci` tests on `iojs` and `node` v0.12; speed up builds; allow 0.8 failures. [`f6c58c5`](https://github.com/ljharb/listify/commit/f6c58c5a479e56e5417ad1c673c642c563eb5f9d)
- Use SVG badges instead of PNG [`373dd91`](https://github.com/ljharb/listify/commit/373dd911a493d6be83da93bbd7fb125513cb40f9)
- [Dev Deps] update `auto-changelog`, `tape` [`dfdcc09`](https://github.com/ljharb/listify/commit/dfdcc09fe0bf431cee2f1396ed61779b30f0c3d4)
- [Dev Deps] update `@ljharb/eslint-config`, `tape` [`3aeae1d`](https://github.com/ljharb/listify/commit/3aeae1d20cf5f2ba861471dd4582cd040a513e98)
- Update `tape`, `jscs` [`ff732c0`](https://github.com/ljharb/listify/commit/ff732c00ecfe2d46d565801a0d204c33d9b41747)
- Update `jscs` [`68521e7`](https://github.com/ljharb/listify/commit/68521e7a571825b89aa72b56f070eda671ca1844)
- Update `tape`, `jscs` [`38a90e6`](https://github.com/ljharb/listify/commit/38a90e690d0f8789dd4f4004956c87b6cc3c657c)
- Update `tape`, `jscs` [`f27b95d`](https://github.com/ljharb/listify/commit/f27b95d98819ff9a3bc18598adf92a32f891fb29)
- Using consistent quotes. [`e75fb3e`](https://github.com/ljharb/listify/commit/e75fb3ec606bb9d2975905a0e6dacc63cd8a0916)
- Naming npm version badge SVG in README [`4b66e49`](https://github.com/ljharb/listify/commit/4b66e493ec68d7be3a2e639ca19952ef214621c0)
- Naming npm package URL in README [`8b0dce9`](https://github.com/ljharb/listify/commit/8b0dce9211a8d69bf476be72e8436920ba3cc1ae)
- [Dev Deps] update `auto-changelog`; add `aud` [`1575892`](https://github.com/ljharb/listify/commit/1575892db5b5bd4374db1ba3f5fa43abc6928ede)
- [meta] add `funding` field [`2a95788`](https://github.com/ljharb/listify/commit/2a95788922e094d51a79417c82df9c170de1b255)
- Moving the strict mode declaration higher up. [`d27dd51`](https://github.com/ljharb/listify/commit/d27dd514ccf68a7c886643b27875bdc6653122ff)
- [Tests] only audit prod deps [`dcf6692`](https://github.com/ljharb/listify/commit/dcf6692494e48a8c0242793e1e92a06da1e3ad69)
- [Deps] update `string.prototype.trim` [`3d1c764`](https://github.com/ljharb/listify/commit/3d1c7645b283adf02be911208579fee413df5b4f)
- [Deps] update `string.prototype.trim` [`f478071`](https://github.com/ljharb/listify/commit/f4780715b4f55473459f4b90b2cf320441fe7d58)
- [Deps] update `has` [`6864547`](https://github.com/ljharb/listify/commit/68645472567c49deca895e1a0e9459039654450c)
- [Dev Deps] update `tape` [`01943db`](https://github.com/ljharb/listify/commit/01943db4fcfe1dfe0f6cfe020505789a1454f383)
- Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG. [`254bf09`](https://github.com/ljharb/listify/commit/254bf09e925b48bd08b4cd5f353da862862484a6)
- Update `tape` [`81ecc33`](https://github.com/ljharb/listify/commit/81ecc33ba5c10c561a3aa250facab81e18199e30)
- Update `tape` [`cd2b4af`](https://github.com/ljharb/listify/commit/cd2b4af48023dbca3cbcca0ab84ec02d487769f8)
- Lock covert to v1.0.0. [`0d871a2`](https://github.com/ljharb/listify/commit/0d871a23a3366d0bd53d30dc78700ef659a74ef7)
- Updating jscs [`3c4634c`](https://github.com/ljharb/listify/commit/3c4634c215f0bcaa2d69d6c07bb165cc4326ccda)
- Updating tape [`042773f`](https://github.com/ljharb/listify/commit/042773ffffb0f4d6b8afe7e3db026ddb91e7a4c5)
- Updating jscs [`956a3ff`](https://github.com/ljharb/listify/commit/956a3ffe54d5f70e4cece1fae2509e5825287ae6)
- Updating jscs [`8599356`](https://github.com/ljharb/listify/commit/85993569c0a94f160d6164653fea0e2f7c8e7306)
- Adding coverage as part of tests. [`1a15eea`](https://github.com/ljharb/listify/commit/1a15eea208af3b6adefb7c410569b7eacd3d27e3)
- Running lint as part of tests. [`c9cff98`](https://github.com/ljharb/listify/commit/c9cff987c3a99030fa5da0d0f106d79d2e21982c)
- Test on `io.js` `v3.0` [`a78d701`](https://github.com/ljharb/listify/commit/a78d70161978df5cbeb3ce467481f8994b9a0a1b)

## [v1.0.0](https://github.com/ljharb/listify/compare/v0.0.1...v1.0.0) - 2014-08-13

### Commits

- Make sure old and unstable nodes don't break Travis [`4dbc35d`](https://github.com/ljharb/listify/commit/4dbc35d8d6d4120c30f1206cd6ec582bc3f68482)
- Adding `npm run coverage` [`a9344cc`](https://github.com/ljharb/listify/commit/a9344cc394d9eacaf1f6f488881362efaa97a337)
- Dropping node 0.6 support [`989855d`](https://github.com/ljharb/listify/commit/989855df99842fea2b826a51c3496bc4aaa6bf15)
- Updating dependencies [`d9df522`](https://github.com/ljharb/listify/commit/d9df5225998f19e54c8f68f3d1a17e3451982208)
- Adding 0.4 and commented 0.6 back. [`829c342`](https://github.com/ljharb/listify/commit/829c3428f5f46ca15806d12bcdd1c9a921c830ed)
- Updating tape [`1fb6927`](https://github.com/ljharb/listify/commit/1fb6927899aa266f71c2e57d636e243d34859741)
- Updating covert [`3b5c500`](https://github.com/ljharb/listify/commit/3b5c5002b0c2e6b0ff807426982ac2a558ecfd6e)
- Updating tape [`4995f3a`](https://github.com/ljharb/listify/commit/4995f3a0d545e219d4bf4d2c256084c6acd4ff36)
- Updating covert [`e1a8cf4`](https://github.com/ljharb/listify/commit/e1a8cf419a23ba9527cd709dc35caa44e7c53518)
- Updating tape [`245746d`](https://github.com/ljharb/listify/commit/245746dd752c6eb6060fdbab6ad778465126191b)
- Testing on node 0.6 now [`e0ea051`](https://github.com/ljharb/listify/commit/e0ea051f9ae7a3b728623de167b3fbb4426a37db)
- Unset strict SSL for node 0.6 in Travis-CI [`7d0b935`](https://github.com/ljharb/listify/commit/7d0b93536483695b2f96c33f6c3e10dadaa1a55b)
- Updating tape [`d8c820c`](https://github.com/ljharb/listify/commit/d8c820c83139f61c692708e746658e15f85c7013)
- Updating tape [`c1d08bf`](https://github.com/ljharb/listify/commit/c1d08bf4bffeb7cb8aa309c6eea4e79160a784b7)
- Test in node 0.11 too [`a930524`](https://github.com/ljharb/listify/commit/a930524212e2f2cc4642fedb6037eba9cf373220)

## v0.0.1 - 2013-09-07

### Commits

- Tests. [`ac7be65`](https://github.com/ljharb/listify/commit/ac7be65767ddca7683f1ccebef2d0eef3a6c664b)
- Initial commit [`00a1737`](https://github.com/ljharb/listify/commit/00a17378144f260a3b018c1b9d3b56dc025e882b)
- Implementation. [`8161f3d`](https://github.com/ljharb/listify/commit/8161f3ded61d78899993296019970b382a760976)
- package.json [`3d5f1e6`](https://github.com/ljharb/listify/commit/3d5f1e6598d64447f562363de47a51736d6c6bdd)
- Updating the README [`c93f912`](https://github.com/ljharb/listify/commit/c93f91261cb7c1a22e7e7278778c7178485bbb5d)
- Adding travis.yml [`159cc31`](https://github.com/ljharb/listify/commit/159cc3186c317d3393bb3dd05f745e921f1e9d56)
- Adding node_modules to gitignore since this is a module. [`a52f8f6`](https://github.com/ljharb/listify/commit/a52f8f649da25423421fcbd8fec1c8ff23978b8c)
