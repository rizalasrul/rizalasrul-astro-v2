const lookStupidGetBetter = new Proxy({"src":"/_astro/look-stupid-get-better.298l_5ks.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/look-stupid-get-better.png";
							}
							
							return target[name];
						}
					});

export { lookStupidGetBetter as default };
