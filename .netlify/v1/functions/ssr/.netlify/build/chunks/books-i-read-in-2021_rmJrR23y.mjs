const booksIReadIn2021 = new Proxy({"src":"/_astro/books-i-read-in-2021.B6e3xjTa.png","width":960,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rizalasrul/rizalasrul-astro-v2/src/assets/books-i-read-in-2021.png";
							}
							
							return target[name];
						}
					});

export { booksIReadIn2021 as default };
