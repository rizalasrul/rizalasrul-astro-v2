const flashbackToBandung6 = new Proxy({"src":"/_astro/flashback-to-bandung-6.DKM9CE_R.jpg","width":2281,"height":1283,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/flashback-to-bandung-6.jpg";
							}
							
							return target[name];
						}
					});

export { flashbackToBandung6 as default };
