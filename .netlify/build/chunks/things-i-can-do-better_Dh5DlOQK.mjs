const thingsICanDoBetter = new Proxy({"src":"/_astro/things-i-can-do-better.CnxGVtZE.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/things-i-can-do-better.png";
							}
							
							return target[name];
						}
					});

export { thingsICanDoBetter as default };
