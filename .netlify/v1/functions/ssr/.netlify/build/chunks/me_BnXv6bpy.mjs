const me = new Proxy({"src":"/_astro/me.C-Kn8WIW.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/me.png";
							}
							
							return target[name];
						}
					});

export { me as default };
