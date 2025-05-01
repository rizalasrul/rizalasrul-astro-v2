const myFirstBigPurchase1 = new Proxy({"src":"/_astro/my-first-big-purchase-1.CDvNjdLB.jpg","width":1600,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/my-first-big-purchase-1.jpg";
							}
							
							return target[name];
						}
					});

export { myFirstBigPurchase1 as default };
