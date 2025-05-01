const flashbackToBandung = new Proxy({"src":"/_astro/flashback-to-bandung.BMWFKWhR.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/flashback-to-bandung.png";
							}
							
							return target[name];
						}
					});

export { flashbackToBandung as default };
