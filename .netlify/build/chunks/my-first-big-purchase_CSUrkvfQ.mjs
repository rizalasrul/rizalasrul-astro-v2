const myFirstBigPurchase = new Proxy({"src":"/_astro/my-first-big-purchase.DxoRHJcU.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/my-first-big-purchase.png";
							}
							
							return target[name];
						}
					});

export { myFirstBigPurchase as default };
