const flashbackToBandung20 = new Proxy({"src":"/_astro/flashback-to-bandung-20.CGJQidI4.jpg","width":722,"height":1283,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/flashback-to-bandung-20.jpg";
							}
							
							return target[name];
						}
					});

export { flashbackToBandung20 as default };
