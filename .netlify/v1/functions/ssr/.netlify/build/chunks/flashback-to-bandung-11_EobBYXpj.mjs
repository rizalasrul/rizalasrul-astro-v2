const flashbackToBandung11 = new Proxy({"src":"/_astro/flashback-to-bandung-11.CKqT4gZd.jpg","width":2281,"height":1283,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/flashback-to-bandung-11.jpg";
							}
							
							return target[name];
						}
					});

export { flashbackToBandung11 as default };
