const takeADayOff = new Proxy({"src":"/_astro/take-a-day-off.KOZjtNeZ.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/take-a-day-off.png";
							}
							
							return target[name];
						}
					});

export { takeADayOff as default };
