const whatIHadToUnlearn4 = new Proxy({"src":"/_astro/what-i-had-to-unlearn-4.CbACyY0V.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/what-i-had-to-unlearn-4.jpg";
							}
							
							return target[name];
						}
					});

export { whatIHadToUnlearn4 as default };
