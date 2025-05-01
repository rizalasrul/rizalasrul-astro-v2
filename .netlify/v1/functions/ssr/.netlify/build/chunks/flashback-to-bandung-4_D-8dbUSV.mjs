const flashbackToBandung4 = new Proxy({"src":"/_astro/flashback-to-bandung-4.CTMCpUmX.jpg","width":2281,"height":1283,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/flashback-to-bandung-4.jpg";
							}
							
							return target[name];
						}
					});

export { flashbackToBandung4 as default };
