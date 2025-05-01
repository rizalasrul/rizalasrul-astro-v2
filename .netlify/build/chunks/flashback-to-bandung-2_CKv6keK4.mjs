const flashbackToBandung2 = new Proxy({"src":"/_astro/flashback-to-bandung-2.QyVukmFv.jpg","width":2390,"height":1344,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/flashback-to-bandung-2.jpg";
							}
							
							return target[name];
						}
					});

export { flashbackToBandung2 as default };
