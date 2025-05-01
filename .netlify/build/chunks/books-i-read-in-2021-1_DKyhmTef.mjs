const booksIReadIn20211 = new Proxy({"src":"/_astro/books-i-read-in-2021-1.BisIizfx.jpg","width":520,"height":601,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/books-i-read-in-2021-1.jpg";
							}
							
							return target[name];
						}
					});

export { booksIReadIn20211 as default };
