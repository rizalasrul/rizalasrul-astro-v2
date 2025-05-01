const justWait = new Proxy({"src":"/_astro/just-wait.S8klhCZ1.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/just-wait.png";
							}
							
							return target[name];
						}
					});

export { justWait as default };
