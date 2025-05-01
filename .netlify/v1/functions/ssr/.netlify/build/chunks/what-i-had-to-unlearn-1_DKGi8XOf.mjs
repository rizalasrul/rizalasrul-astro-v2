const whatIHadToUnlearn1 = new Proxy({"src":"/_astro/what-i-had-to-unlearn-1.C8dkRXNt.jpg","width":720,"height":578,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/what-i-had-to-unlearn-1.jpg";
							}
							
							return target[name];
						}
					});

export { whatIHadToUnlearn1 as default };
