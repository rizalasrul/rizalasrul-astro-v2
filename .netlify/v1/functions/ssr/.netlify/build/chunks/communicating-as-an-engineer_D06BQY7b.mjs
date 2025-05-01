const communicatingAsAnEngineer = new Proxy({"src":"/_astro/communicating-as-an-engineer.DBqE457M.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/communicating-as-an-engineer.png";
							}
							
							return target[name];
						}
					});

export { communicatingAsAnEngineer as default };
