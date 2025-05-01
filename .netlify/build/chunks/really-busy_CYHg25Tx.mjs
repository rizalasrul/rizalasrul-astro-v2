const reallyBusy = new Proxy({"src":"/_astro/really-busy.DwALrrn6.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/really-busy.png";
							}
							
							return target[name];
						}
					});

export { reallyBusy as default };
