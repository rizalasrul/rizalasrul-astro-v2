const egoIsEnemyButWhy = new Proxy({"src":"/_astro/ego-is-enemy-but-why.tRqoaQ38.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/ego-is-enemy-but-why.png";
							}
							
							return target[name];
						}
					});

export { egoIsEnemyButWhy as default };
