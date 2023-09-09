import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export function Movies({onSidebarClose}) {
	
	return (
		<div className="movies">
			<Header onSidebarClose={onSidebarClose}/>
			<main className="movies__main">
				<SearchForm/>
				<MoviesCardList possibleMore={true}>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1694390400&Signature=jNyAgTWPU2EWDsdpb44BO20q0b1p7ByngE3YnIdCtbqx7z~U4ahJfLrB57yJ-BUERwAha9f0t3zfzAOuczEstIHMEMVw7agbW6GYy-Hzn491-T6IWy-dBQSaFz7TtztRz6i870L3gqpksZLxaBTYTTUwkfTgvK79P4-uRXJWSPr~tTwSuacSDtFP786t09p4QFnl1klV7BjKJUvUg2JTE8bPQhcA4U6UOZ4c0uWZA99QUwW12XGxzQQMvDXkIIW6N3-yecCmW7ECbawCZ7574zo6E-TCr4detAU8UIX2DtSS8iR~cClUk1OvY4WjDkKGPWqTzCkKhbnEQk~FzBnicg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						saved={true}
						image="https://s3-alpha-sig.figma.com/img/90ba/2e4b/e072f3f38937c7f5d592d64f3fa59f33?Expires=1694390400&Signature=VXPM0x4zh-yr0LeDLIVgl6O9SfjEhGl2L7zoQzytvkOqJ~CYz1~WIpelLQw5z9gZR11nhDl5VtdFjvtXLvcccR4CWLaomZ9QPPoUnF2rPX~qpnOHNcW9YKirrPPNhw~lQsg97Xgglfh7O5Bh9XafP~hw9kFZFpHVAKAlpsDbryq7k1hojdZZGHx1orVdoxAkq0KDJPOGP3nn2jN7LYW8EFUpciPxr1tUM95bepdPM4c1Hiv-C~JDPo~yoHv88cpd79PLefRaaaIAdbeMNR-dBiCQHpwnK0JRm~UgCaW9zaggnO-T7wXmTuGAUWoBfxpXFU-oN6k2M9u6SpQkt2xvgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/7501/fcae/58fcf299e5a04c29cb37e6280c83da16?Expires=1694390400&Signature=Y2stCeet9lwaj~rfF2pqKwOGfFdq2y5QYeTgmektClvMLpFxlodZleKATPLMwK-4Qd4sswda9o5nASt3rMNlCxYHuCoIcuOIDkP5HPKLTwm0DqQLcn7IH1SOsL~CM2uqoTeyHsdiWzZXXeexVrC~qrxO-errLHKkUwrHhM59foxEjBC~GomTPmDM~LhWc41xCi4MqK3dYgFEeK3IXSsHbPRlpyOWBAacvL1WP2iVRWA3pr56o1jHV0paiW9X-Qs26Vv5IDxQrcB7nsXH0Rh2ydEEL3thv9WBwFTyulsypUOkMYmtBGKtDubbaJybWe-YpBUb6X9exhXAOAPESUc0rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/96cc/9d30/2e6653f8a2dbac83b4795cc1e846a243?Expires=1694390400&Signature=DWr5Bv99L7Pu9ydVbD6G0qhZJCg7UXDU~8iWhyu9ZVjGRu6kB5aw9G7y~2PjyVSGoFAUe-O6VRMW5FIs48BiwbQKtx971WrnBA8TGr8Iu0zgRathIJLGx50-cqaKWE-gZl25bQJI85xnbqoKLOSLIWW7RybYiLayQ8wwh77XHEWMhFilzmEQL~cJoQiJFgJ3F9jLOUckRSKS36Z75xV79-nQWHRXcxq7MAx6-jpxHrF7x5K6YksRkL-3MZDV5UI14Nrj3ga3fHkPVO8Yu4PUHVgZTrdixNVZ5rvqnO4WE5Era8wv2n2a7RH2uK~k2CvefHZDAeJB5Zxok6uzmLmswg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						saved={true}
						image="https://s3-alpha-sig.figma.com/img/b5e4/a6cb/ff07e856bc14f2c67fd3d453609875e8?Expires=1694390400&Signature=hYTjPfukRcoB4PYUHF~-WRRlqjLDJsVMXJ8Eq8zDIRktNxkhhT1xTO7hF1I~Itw5cPoqSDPknqYqUl55-Ub-WNw5iQ1K7FlknH383aNRmO~TRuSukMerKnRiyyYH-52Ex1aV0QkjhGCFt4r77uekUAZ07b0oeXPosyaLxelXm6ehVgXmGEbaABaBIM0VhMBtV0vftBlHq-UJVUma6b6~a2H92Zu2uVKnfFtlXy19p8TTU9yiLV3wyx6aeVj2Nnmcwvpfiic2YGG9AIBj6kpQwYXJCfmPWR2E4pSdCKl9UroCSCk3T3fJpHt-RJVsU53i9noWBtgzd89ocSnL8pgUtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/199d/35fd/ed1213c8b6d45652874df917fdcefb3b?Expires=1694390400&Signature=T21inxuEG2m9fHoskz12zglxYkiXkFe25o9cIz259UQZPURoe-8-aK9fsZZGar5TCBcX8m-5lajQRrwL3btwr7OXEDwyiVzLqe36aE3xWJF0vLgua1rb7lgBkdPKBxxhUfB4lyEPSnLQH5Kq1ukLbE-8bdnUrIZdSRRctK5nktz3~Is~mLuW-eAm4djT33VmpeJ7UpySwqDEDcI5YIjNovTE1-iVO4ApcHkrGd2Bs~5oUdoUQVjGEUBhqeLJCZwwnJ6O5aTNTn-HV8PlC~KnWCEsNUNLw99nbD66stoNJbqmUqPaJLjP5yDqupOHQ77Rj3KJhDDJoSX5Gr9vsXH23w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/16ca/4833/dee0e587ee02e0b9181fbac58ce0aeee?Expires=1694390400&Signature=UKmSf-nNjjA1Z7aYRmOu1HmvS4ssMEoxIbdI8CZwJmVn8LrVz3QgkXHCpLTIuRTwiDlebhK31g~GOXnMKm-CaR6VC4pbf0ocOyvjjLUXEX5eVoPzj-UYHCI9GWhf-p8GPJEzYjtnlRSGFl1t0vVwUvlR2GOn47WN5janARRsuAMtg3xEmU-1DAYD6XbzosuWTiCTw8VvlGYujDpqKv-d8VPPFumoEl1yAedQeIsz3zkZAdGCMF3VkyVfepIdHzdNMUBrbPKS9~HE27MkdsKUIxOH~bbTZRNc0dMFBiQbdjOJ2psdeKnFakLM3lsPpKFTijJMTpcMiHMIl-kSrX-AYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						saved={true}
						image="https://s3-alpha-sig.figma.com/img/db51/87fa/f8c41998d6d82176e93f868814bf1d2b?Expires=1694390400&Signature=XgGY4RPZafTqXVsB6CXyDvFSzSU9ES7rtFNHmhxm~RJ56URx0IWglA3GRidJA6GXwGvL~U2ZBN5PJOCfgAQYN91Zkaqe6S7f2uBIYHSe5bM~7CK-BceAv-OJlyTmpsq-wengJadN1mJ3EusHgRxZusnOX7HHbrVcqBoAJDCkOoQdtSl6q4Ec9IB4sl3pPg5wZpXi~uxqjdYfiHDQOjZtUShDwNtS-qnlGdvXVAKzxvvHJf~LwDslvge2OBg~ZDA6wOjtxonDyanEplcO9ZV~cq~xGT00eK~zftTAHNEwg8G7bM3PIHkkA7k9kslOZfTzBOdJntXMRIyL24JGVwnUYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/8604/c3a8/492a130e904f2edf96264863e930e51f?Expires=1694390400&Signature=dAIsjXvJC-xA7xLlSOBkjbm83k47Q96WUO96V~Y0aB5ck~wJbsQgLy0Zfx3e5J5pC7sYyO2VoGiq4C-1dejoMa77rJWZhM4f7bNeekJSWZi8seG-ZLp4FwK5PvpI6rmuFK04KWOz7IkKFL8SF92Dbxrr~Ptgm0P0De615Z0i4GKmpMsWTzF02aYdd~N9Y12POng-k1xh8Z7IB63mR6j35wpwfC6QfEunk15FsypJOGPsA8Z6~ZmF7mqnbsNR2Ee4GcTwEXMIstLDlWC3oz7~zGETyQWkeifXv0ifwyW~9F9kv6NXO9JnXpCGlMD7-T3NkRoPbkkhwfHvvyiV6xmTfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/532b/0b33/a7e2023e9428929e8632172735ff18f5?Expires=1694390400&Signature=k7gSnK9x4Y-RE~-61Vv15sTsfXIPfRh0Ha-iYngSWGfxSayRvHZE5v6-eW0IZi8gkIu6nbu-otNtMdqfF7HxPok11F1OKaZLRhOm3V3J2Ry942Aka0Q3EUHhNjFz7fn9oj~4rJrLrjS5GvlUk38ca5doq6EDzyJnu0HzEXHtioXe~KlojaZyWXWjvHpS8eo-MojdvixdYsE5U9UBv-3p2LIbnsQ5wY3njZ15wylIItBKXbCB3A7p89UJoPVbd0kbX1TYzSuIpTZySg-j8nnEHhf0U6cN4wE6sJXzG~r3-mKrPwpSpWJL5lC5tRX2ltxMjB3FnwFp3IF14f2bkGnEYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						saved={true}
						image="https://s3-alpha-sig.figma.com/img/ff18/63df/9c469b036f5505dd9a947241f21f8245?Expires=1694390400&Signature=lWt5Pc2LAXUNrcID0SkHvkvCG8G5VsyHzI4e2gMf4YMGhMYzZ7cNSeK7rZWi0it3oZW~9TUsLDko70hFoxHZwFOXrPmSYuj~1DA9bFeLkX6yqmyUUYJlbzcuqAObmj6EB8QcaJRWW1e30P4keBDo0FFGEMw52L3Y2pGw7UDO-NQoZ0f~ATFB3aqOLxnqcQN1ooR4YcaZdQk0otVtilLadGWNyxj89H4jK7ZBkXg-ImLZPdJ6uezJkRCDZv5fJpYJTGnjiqaOeiQbTvO7YLbQ80mWiDbepDiPrL5H4SmmtTSJYenjIflpBC20UH0VPnu2Ozseb-pNqDHHtiygyvBGXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/9f37/4383/9cbecda3e33558c8bfcc052f8002c008?Expires=1694390400&Signature=FkEps~74yDIMLD1wbgPMxjVNK6M6Dd2URIZmZx5X4pXwTPAGU-w3fvtzNCEwPagGN1YbPexyw-g5PyfDulouYO0UBw6Xi7RlXPE9wL3ytCIabaC2bpd~YyUBrkoEJyZcklbm5mkgIVPhD5luZ7FBAySZ1vdGbLQHL6wHRXMDkZzS4HGFhrC2vBIBmC5OQBwNt5ugWMFXw0jc0Bw2t7eLfJlFaxyPK-x7qruGh6gqTuj6t95ygvLmJeRhwyhOrg8SLxajcGkb1MOca2gbVIHfgCjUcuBx5exFGCIP7hxCKT9Vt8TLlHtX9ytETOisaBSVB0DEfDr6TDYC3Byev~WG3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						saved={true}
						image="https://s3-alpha-sig.figma.com/img/15e7/907e/a155d35bb2900a7523c41e586e62a5a7?Expires=1694390400&Signature=pn7erPiutPt5UD9PHtfVlVov5Ia6iKcvmX20UKwzAdIWMwi~CzI0FK8Wctw0RViogiun99OTwDQc8aWxkJ8av8kT6B9u1Cn9g-HW9TQ1IACttIvHQmrHdPYqcBjf~Ru~iXWUNwqEqGaiDBfFEYy4FMUw9PWyNZoa9SvV-AYAvm9Vo~O-byZtKY4ci~AtugdzMcBThozi1NVo-BAaCGHz9rBJMOW0ry2cmjSzo0-dPeFy9w5Fv3K1JK2V3EwG5Iosrchv7-AJ0UWml4KFXbizmXxmvHhchuS2yaQB5igUQXwapfRCqMNDGJy8mBx9Lv9wbdpe728vm2iEflhiFyi~lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/6380/fa53/8ad8f141ae7babcf9a109cb6e6f760e7?Expires=1694390400&Signature=jPfctsCx9EXijqkyjc-WBLbM0dT40w-k9h6uKHP2aWlKpdM26dhcNTZivxLxIhDRW-6Cfm5a4iKiQnu9MajLHCurMwaDLMhrtRNcQmHgPWTI8t23F3iRpsqpOKQqLNXu-qYpeggkylOU5WW-xVTTP6L0SpSsjEFGIitnmU5Pg7Tb6i8XVOvGWvINalV9moemwQBJX24VMMVYC18ly3bFYHZt7Blhrcdu1KptwsyMEwVlbj84XokzBXNj305nRv6d1472JplyiurP0dZTRNYeu81JInCYv-nAtRDfGyXB0uf1WIA6lavYl-Q5EOFbQBowdJmlsZiRBjlvcp0QZQYyGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						image="https://s3-alpha-sig.figma.com/img/ab88/283d/4aab68a30ea43a46bde9dae287117202?Expires=1694390400&Signature=YZFReXg24EHUxkyf2BskO8chZRFtW3JaskK7wLMCtOKjwS7y2jhb2uyeoWwtObEXXGNqKev6ZKnK-jz1vWbhNtnhCPn257z6CfbUoxu-Tr87K-2-GIAtEbWOy56KLkVq8B-pT6qoFMLQT-6qbiitMzcrGl4gp~lZN2XCOToSzIkhQuvJ2q4qizQP2~ftVuEv7~ezaqS2vilv~RfZKbOfYpVmaV6B4HAwv577WsN5S-oWlvAFTlCiDh27bxiASKokH3kOY7Qasj8o2Ql3oJeK6RTMEDXDL91LvbavUtiFtEdyPLoC-0WjM6wJoTVLxdyFLho07HWroJaPrw0bo1vb~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
					<MoviesCard
						saved={true}
						image="https://s3-alpha-sig.figma.com/img/55cf/5d6f/979762a87e125d70efcb27da8d89c745?Expires=1694390400&Signature=i9OHFLBeZuZx9SD1fWqf9BdAQEH8Ba1f0oKFkYMP05WTJOjNGrCls0OMRp1MbN48vBttg2JLyrsd7uL0SpHQf2bPS3rI3R6q4t7txw5zhM4q3K7JQWEVKE~EJ6ixUpHStR9p7J1y3IcAo-5fZ16cKAV1lvXJNikxvaMZWdbH2JAPQpmlUb3h7G0O3wwsu8HKK7qkGpjQY5YR10FYlTsZK2XQBkYZXGIc60WBNUJKpNHhEFXZ7ggVfNp5~4fMJisJsveGRzWeI8UgImT1QyNahGc3O6XGnfGUpYExJq4dkxP~JDwx7Mc7i~wuCaQXa9IgcOUu~gbUQah0aQQhRyMFxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						title="33 слова о дизайне"
						duration="1ч42м"
					/>
				</MoviesCardList>
			</main>
			<Footer/>
		</div>
	);
}

export default Movies;