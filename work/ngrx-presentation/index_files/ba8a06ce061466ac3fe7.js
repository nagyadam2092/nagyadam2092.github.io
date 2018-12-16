document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-c25e2efde9da332f6cd59ef5c647a379.css">')
document.write('<div id=\"gist28015284\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-simple-redux-js\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-javascript \">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-simple-redux-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-simple-redux-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">/*<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-simple-redux-js-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">* The reason for this is just a thought exercise<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-simple-redux-js-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">* often people(myself super included) are so confused<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-simple-redux-js-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">* when trying something new, but breaking it down<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-simple-redux-js-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">* to it&#39;s simplest existence can be the best way to understand<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-simple-redux-js-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">*/<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-simple-redux-js-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">function<\/span> <span class=\"pl-en\">createStore<\/span>(<span class=\"pl-smi\">reducer<\/span>, <span class=\"pl-smi\">initState<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-simple-redux-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">let<\/span> state <span class=\"pl-k\">=<\/span> initState;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-simple-redux-js-LC9\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">let<\/span> subscribers <span class=\"pl-k\">=<\/span> [];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-simple-redux-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-simple-redux-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">getState<\/span> <span class=\"pl-k\">=<\/span> () <span class=\"pl-k\">=&gt;<\/span> state;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-simple-redux-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">dispatch<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">action<\/span> <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-simple-redux-js-LC13\" class=\"blob-code blob-code-inner js-file-line\">		state <span class=\"pl-k\">=<\/span> <span class=\"pl-en\">reducer<\/span>(state, action);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-simple-redux-js-LC14\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-smi\">subscribers<\/span>.<span class=\"pl-c1\">forEach<\/span>((<span class=\"pl-smi\">subscriber<\/span>) <span class=\"pl-k\">=&gt;<\/span> <span class=\"pl-en\">subscriber<\/span>());<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-simple-redux-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">return<\/span> action;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-simple-redux-js-LC16\" class=\"blob-code blob-code-inner js-file-line\">	}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-simple-redux-js-LC17\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">subscribe<\/span> <span class=\"pl-k\">=<\/span> (<span class=\"pl-smi\">listener<\/span>) <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-simple-redux-js-LC18\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-smi\">subscribers<\/span>.<span class=\"pl-c1\">push<\/span>(listener);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-simple-redux-js-LC19\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">return<\/span> () <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-simple-redux-js-LC20\" class=\"blob-code blob-code-inner js-file-line\">			subscribers <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">subscribers<\/span>.<span class=\"pl-c1\">slice<\/span>(<span class=\"pl-smi\">subscribers<\/span>.<span class=\"pl-c1\">indexOf<\/span>(listener) <span class=\"pl-k\">+<\/span> <span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">1<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-simple-redux-js-LC21\" class=\"blob-code blob-code-inner js-file-line\">		};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-simple-redux-js-LC22\" class=\"blob-code blob-code-inner js-file-line\">	}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-simple-redux-js-LC23\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">return<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-simple-redux-js-LC24\" class=\"blob-code blob-code-inner js-file-line\">		dispatch,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-simple-redux-js-LC25\" class=\"blob-code blob-code-inner js-file-line\">		subscribe,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-simple-redux-js-LC26\" class=\"blob-code blob-code-inner js-file-line\">		getState<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-simple-redux-js-LC27\" class=\"blob-code blob-code-inner js-file-line\">	}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-simple-redux-js-LC28\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-simple-redux-js-LC29\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-simple-redux-js-LC30\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">initState<\/span> <span class=\"pl-k\">=<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-simple-redux-js-LC31\" class=\"blob-code blob-code-inner js-file-line\">	name<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Conor<span class=\"pl-pds\">&quot;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-simple-redux-js-LC32\" class=\"blob-code blob-code-inner js-file-line\">	redux<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>awesome<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-simple-redux-js-LC33\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-simple-redux-js-LC34\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">myReducer<\/span> <span class=\"pl-k\">=<\/span> (<span class=\"pl-smi\">state<\/span>, <span class=\"pl-smi\">action<\/span>) <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-simple-redux-js-LC35\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">let<\/span> newState <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">Object<\/span>.<span class=\"pl-en\">assign<\/span>({}, state);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-simple-redux-js-LC36\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">switch<\/span> (<span class=\"pl-smi\">action<\/span>.<span class=\"pl-c1\">type<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-simple-redux-js-LC37\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">case<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>CHANGE_NAME<span class=\"pl-pds\">&quot;<\/span><\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-simple-redux-js-LC38\" class=\"blob-code blob-code-inner js-file-line\">			<span class=\"pl-smi\">newState<\/span>.<span class=\"pl-c1\">name<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">action<\/span>.<span class=\"pl-c1\">name<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-simple-redux-js-LC39\" class=\"blob-code blob-code-inner js-file-line\">			<span class=\"pl-k\">break<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-simple-redux-js-LC40\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">case<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>CHANGE_REDUX_ADJECTIVE<span class=\"pl-pds\">&quot;<\/span><\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-simple-redux-js-LC41\" class=\"blob-code blob-code-inner js-file-line\">			<span class=\"pl-smi\">newState<\/span>.<span class=\"pl-smi\">redux<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">action<\/span>.<span class=\"pl-smi\">adjective<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-simple-redux-js-LC42\" class=\"blob-code blob-code-inner js-file-line\">			<span class=\"pl-k\">break<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-simple-redux-js-LC43\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">default<\/span>: <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-simple-redux-js-LC44\" class=\"blob-code blob-code-inner js-file-line\">			<span class=\"pl-c\"><span class=\"pl-c\">//<\/span>do nothing<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-simple-redux-js-LC45\" class=\"blob-code blob-code-inner js-file-line\">	}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-simple-redux-js-LC46\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">return<\/span> newState<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-simple-redux-js-LC47\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-simple-redux-js-LC48\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L49\" class=\"blob-num js-line-number\" data-line-number=\"49\"><\/td>\n        <td id=\"file-simple-redux-js-LC49\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">store<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-en\">createStore<\/span>(myReducer, initState);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L50\" class=\"blob-num js-line-number\" data-line-number=\"50\"><\/td>\n        <td id=\"file-simple-redux-js-LC50\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L51\" class=\"blob-num js-line-number\" data-line-number=\"51\"><\/td>\n        <td id=\"file-simple-redux-js-LC51\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-en\">console<\/span>.<span class=\"pl-c1\">log<\/span>(<span class=\"pl-smi\">store<\/span>.<span class=\"pl-en\">getState<\/span>(), <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>initial state<span class=\"pl-pds\">&quot;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L52\" class=\"blob-num js-line-number\" data-line-number=\"52\"><\/td>\n        <td id=\"file-simple-redux-js-LC52\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L53\" class=\"blob-num js-line-number\" data-line-number=\"53\"><\/td>\n        <td id=\"file-simple-redux-js-LC53\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">subscriber<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-smi\">store<\/span>.<span class=\"pl-en\">subscribe<\/span>(() <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L54\" class=\"blob-num js-line-number\" data-line-number=\"54\"><\/td>\n        <td id=\"file-simple-redux-js-LC54\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-en\">console<\/span>.<span class=\"pl-c1\">log<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>i&#39;ll console state changes twice then unsubscribe so you will not be notified of the third dispatch<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-smi\">store<\/span>.<span class=\"pl-en\">getState<\/span>());<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L55\" class=\"blob-num js-line-number\" data-line-number=\"55\"><\/td>\n        <td id=\"file-simple-redux-js-LC55\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L56\" class=\"blob-num js-line-number\" data-line-number=\"56\"><\/td>\n        <td id=\"file-simple-redux-js-LC56\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L57\" class=\"blob-num js-line-number\" data-line-number=\"57\"><\/td>\n        <td id=\"file-simple-redux-js-LC57\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-smi\">store<\/span>.<span class=\"pl-en\">dispatch<\/span>({<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L58\" class=\"blob-num js-line-number\" data-line-number=\"58\"><\/td>\n        <td id=\"file-simple-redux-js-LC58\" class=\"blob-code blob-code-inner js-file-line\">	type<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>CHANGE_NAME<span class=\"pl-pds\">&quot;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L59\" class=\"blob-num js-line-number\" data-line-number=\"59\"><\/td>\n        <td id=\"file-simple-redux-js-LC59\" class=\"blob-code blob-code-inner js-file-line\">	name<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Conor Hastings<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L60\" class=\"blob-num js-line-number\" data-line-number=\"60\"><\/td>\n        <td id=\"file-simple-redux-js-LC60\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L61\" class=\"blob-num js-line-number\" data-line-number=\"61\"><\/td>\n        <td id=\"file-simple-redux-js-LC61\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L62\" class=\"blob-num js-line-number\" data-line-number=\"62\"><\/td>\n        <td id=\"file-simple-redux-js-LC62\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-smi\">store<\/span>.<span class=\"pl-en\">dispatch<\/span>({<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L63\" class=\"blob-num js-line-number\" data-line-number=\"63\"><\/td>\n        <td id=\"file-simple-redux-js-LC63\" class=\"blob-code blob-code-inner js-file-line\">	type<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>CHANGE_REDUX_ADJECTIVE<span class=\"pl-pds\">&quot;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L64\" class=\"blob-num js-line-number\" data-line-number=\"64\"><\/td>\n        <td id=\"file-simple-redux-js-LC64\" class=\"blob-code blob-code-inner js-file-line\">	adjective<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>great<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L65\" class=\"blob-num js-line-number\" data-line-number=\"65\"><\/td>\n        <td id=\"file-simple-redux-js-LC65\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L66\" class=\"blob-num js-line-number\" data-line-number=\"66\"><\/td>\n        <td id=\"file-simple-redux-js-LC66\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L67\" class=\"blob-num js-line-number\" data-line-number=\"67\"><\/td>\n        <td id=\"file-simple-redux-js-LC67\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-en\">subscriber<\/span>();<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L68\" class=\"blob-num js-line-number\" data-line-number=\"68\"><\/td>\n        <td id=\"file-simple-redux-js-LC68\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L69\" class=\"blob-num js-line-number\" data-line-number=\"69\"><\/td>\n        <td id=\"file-simple-redux-js-LC69\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-smi\">store<\/span>.<span class=\"pl-en\">dispatch<\/span>({<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L70\" class=\"blob-num js-line-number\" data-line-number=\"70\"><\/td>\n        <td id=\"file-simple-redux-js-LC70\" class=\"blob-code blob-code-inner js-file-line\">	type<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>CHANGE_NAME<span class=\"pl-pds\">&quot;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L71\" class=\"blob-num js-line-number\" data-line-number=\"71\"><\/td>\n        <td id=\"file-simple-redux-js-LC71\" class=\"blob-code blob-code-inner js-file-line\">	name<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Conor Cool Guy<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L72\" class=\"blob-num js-line-number\" data-line-number=\"72\"><\/td>\n        <td id=\"file-simple-redux-js-LC72\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L73\" class=\"blob-num js-line-number\" data-line-number=\"73\"><\/td>\n        <td id=\"file-simple-redux-js-LC73\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-simple-redux-js-L74\" class=\"blob-num js-line-number\" data-line-number=\"74\"><\/td>\n        <td id=\"file-simple-redux-js-LC74\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-en\">console<\/span>.<span class=\"pl-c1\">log<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>the state changed but since we unsubscribed the listener above was not notified o the final dispatch<span class=\"pl-pds\">&quot;<\/span><\/span>, <span class=\"pl-smi\">store<\/span>.<span class=\"pl-en\">getState<\/span>());<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/conorhastings/ba8a06ce061466ac3fe7/raw/0f757958f528be5f815c1323566f0e63f4405224/simple-redux.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/conorhastings/ba8a06ce061466ac3fe7#file-simple-redux-js\">simple-redux.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')