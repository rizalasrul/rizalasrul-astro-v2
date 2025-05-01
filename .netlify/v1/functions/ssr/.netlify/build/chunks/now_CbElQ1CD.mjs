const now = new Proxy({"src":"/_astro/now.CwQbK1Uq.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/now.png";
							}
							
							return target[name];
						}
					});

export { now as default };
