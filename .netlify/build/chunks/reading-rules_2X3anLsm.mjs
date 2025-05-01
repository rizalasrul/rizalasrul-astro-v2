const readingRules = new Proxy({"src":"/_astro/reading-rules.CcrekITN.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/reading-rules.png";
							}
							
							return target[name];
						}
					});

export { readingRules as default };
