const gratefulIn2021 = new Proxy({"src":"/_astro/grateful-in-2021.BsfznrBd.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/grateful-in-2021.png";
							}
							
							return target[name];
						}
					});

export { gratefulIn2021 as default };
