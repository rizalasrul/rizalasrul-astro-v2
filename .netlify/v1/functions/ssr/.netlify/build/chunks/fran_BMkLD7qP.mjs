const fran = new Proxy({"src":"/_astro/fran.kKUOk-RT.jpg","width":1920,"height":2560,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/fran.jpg";
							}
							
							return target[name];
						}
					});

export { fran as default };
