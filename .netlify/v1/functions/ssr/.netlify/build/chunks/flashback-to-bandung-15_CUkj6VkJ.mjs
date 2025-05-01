const flashbackToBandung15 = new Proxy({"src":"/_astro/flashback-to-bandung-15.F-7UWqxE.jpg","width":722,"height":1283,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/flashback-to-bandung-15.jpg";
							}
							
							return target[name];
						}
					});

export { flashbackToBandung15 as default };
