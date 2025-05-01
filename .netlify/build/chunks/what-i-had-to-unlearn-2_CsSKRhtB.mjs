const whatIHadToUnlearn2 = new Proxy({"src":"/_astro/what-i-had-to-unlearn-2.BmTGc7dv.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/what-i-had-to-unlearn-2.jpg";
							}
							
							return target[name];
						}
					});

export { whatIHadToUnlearn2 as default };
