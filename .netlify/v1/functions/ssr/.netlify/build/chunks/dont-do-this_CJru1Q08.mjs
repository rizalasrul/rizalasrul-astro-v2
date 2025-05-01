const dontDoThis = new Proxy({"src":"/_astro/dont-do-this.CPPxpNsa.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/dont-do-this.png";
							}
							
							return target[name];
						}
					});

export { dontDoThis as default };
