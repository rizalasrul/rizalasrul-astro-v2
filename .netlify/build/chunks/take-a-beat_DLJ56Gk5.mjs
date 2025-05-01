const takeABeat = new Proxy({"src":"/_astro/take-a-beat.C4VGEqPm.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/take-a-beat.png";
							}
							
							return target[name];
						}
					});

export { takeABeat as default };
