const passionIsAJourney2 = new Proxy({"src":"/_astro/passion-is-a-journey-2.j3GtE-N_.jpg","width":960,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/passion-is-a-journey-2.jpg";
							}
							
							return target[name];
						}
					});

export { passionIsAJourney2 as default };
