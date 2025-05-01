const wfhIsGreatBut = new Proxy({"src":"/_astro/wfh-is-great-but.DUO4pire.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/wfh-is-great-but.png";
							}
							
							return target[name];
						}
					});

export { wfhIsGreatBut as default };
