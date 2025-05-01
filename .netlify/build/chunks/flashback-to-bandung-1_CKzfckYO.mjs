const flashbackToBandung1 = new Proxy({"src":"/_astro/flashback-to-bandung-1.D3ZBfwbH.jpg","width":671,"height":503,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/flashback-to-bandung-1.jpg";
							}
							
							return target[name];
						}
					});

export { flashbackToBandung1 as default };
