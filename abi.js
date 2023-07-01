var abiJSON = {
  "multiSigDailyLimit": {
    "abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"confirmations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"calcMaxWithdraw","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dailyLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"isConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmationCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint256"},{"name":"to","type":"uint256"},{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionIds","outputs":[{"name":"_transactionIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"_confirmations","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"transactionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_required","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"confirmTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"submitTransaction","outputs":[{"name":"transactionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_dailyLimit","type":"uint256"}],"name":"changeDailyLimit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OWNER_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"newOwner","type":"address"}],"name":"replaceOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"spentToday","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_dailyLimit","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"dailyLimit","type":"uint256"}],"name":"DailyLimitChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Revocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Submission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Execution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"required","type":"uint256"}],"name":"RequirementChange","type":"event"}],
    "binHex": "606060405234156200000d57fe5b6040516200182f3803806200182f83398101604052805160208201519101905b600082518260328211806200004157508181115b806200004b575080155b8062000055575081155b15620000615760006000fd5b600092505b845183101562000136576002600086858151811015156200008357fe5b6020908102909101810151600160a060020a031682528101919091526040016000205460ff1680620000d657508483815181101515620000bf57fe5b90602001906020020151600160a060020a03166000145b15620000e25760006000fd5b6001600260008786815181101515620000f757fe5b602090810291909101810151600160a060020a03168252810191909152604001600020805460ff19169115159190911790555b60019092019162000066565b84516200014b9060039060208801906200015e565b5060048490555b5b5050505050620001f7565b828054828255906000526020600020908101928215620001b6579160200282015b82811115620001b65782518254600160a060020a031916600160a060020a039091161782556020909201916001909101906200017f565b5b50620001c5929150620001c9565b5090565b620001f491905b80821115620001c5578054600160a060020a0319168155600101620001d0565b5090565b90565b61162880620002076000396000f3006060604052361561011a5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663025e7c27811461016c578063173825d91461019b57806320ea8d86146101b95780632f54bf6e146101ce5780633411c81c146101fe57806354741525146102315780637065cb481461025d578063784547a71461027b5780638b51d13f146102a25780639ace38c2146102c7578063a0e67e2b14610384578063a8abe69a146103ef578063b5dc40c31461046a578063b77bf600146104d8578063ba51a6df146104fa578063c01a8c841461050f578063c642747414610524578063d74f8edd14610599578063dc8452cd146105bb578063e20056e6146105dd578063ee22610b14610601575b61016a5b600034111561016757604080513481529051600160a060020a033316917fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c919081900360200190a25b5b565b005b341561017457fe5b61017f600435610616565b60408051600160a060020a039092168252519081900360200190f35b34156101a357fe5b61016a600160a060020a0360043516610648565b005b34156101c157fe5b61016a6004356107f9565b005b34156101d657fe5b6101ea600160a060020a03600435166108d6565b604080519115158252519081900360200190f35b341561020657fe5b6101ea600435600160a060020a03602435166108eb565b604080519115158252519081900360200190f35b341561023957fe5b61024b6004351515602435151561090b565b60408051918252519081900360200190f35b341561026557fe5b61016a600160a060020a036004351661097a565b005b341561028357fe5b6101ea600435610ab1565b604080519115158252519081900360200190f35b34156102aa57fe5b61024b600435610b45565b60408051918252519081900360200190f35b34156102cf57fe5b6102da600435610bc4565b60408051600160a060020a03861681526020810185905282151560608201526080918101828152845460026000196101006001841615020190911604928201839052909160a0830190859080156103725780601f1061034757610100808354040283529160200191610372565b820191906000526020600020905b81548152906001019060200180831161035557829003601f168201915b50509550505050505060405180910390f35b341561038c57fe5b610394610bf8565b60408051602080825283518183015283519192839290830191858101910280838382156103dc575b8051825260208311156103dc57601f1990920191602091820191016103bc565b5050509050019250505060405180910390f35b34156103f757fe5b61039460043560243560443515156064351515610c61565b60408051602080825283518183015283519192839290830191858101910280838382156103dc575b8051825260208311156103dc57601f1990920191602091820191016103bc565b5050509050019250505060405180910390f35b341561047257fe5b610394600435610d96565b60408051602080825283518183015283519192839290830191858101910280838382156103dc575b8051825260208311156103dc57601f1990920191602091820191016103bc565b5050509050019250505060405180910390f35b34156104e057fe5b61024b610f1e565b60408051918252519081900360200190f35b341561050257fe5b61016a600435610f24565b005b341561051757fe5b61016a600435610fb4565b005b341561052c57fe5b604080516020600460443581810135601f810184900484028501840190955284845261024b948235600160a060020a03169460248035956064949293919092019181908401838280828437509496506110a295505050505050565b60408051918252519081900360200190f35b34156105a157fe5b61024b6110c2565b60408051918252519081900360200190f35b34156105c357fe5b61024b6110c7565b60408051918252519081900360200190f35b34156105e557fe5b61016a600160a060020a03600435811690602435166110cd565b005b341561060957fe5b61016a600435611289565b005b600380548290811061062457fe5b906000526020600020900160005b915054906101000a9004600160a060020a031681565b600030600160a060020a031633600160a060020a031614151561066b5760006000fd5b600160a060020a038216600090815260026020526040902054829060ff1615156106955760006000fd5b600160a060020a0383166000908152600260205260408120805460ff1916905591505b600354600019018210156107905782600160a060020a03166003838154811015156106df57fe5b906000526020600020900160005b9054906101000a9004600160a060020a0316600160a060020a031614156107845760038054600019810190811061072057fe5b906000526020600020900160005b9054906101000a9004600160a060020a031660038381548110151561074f57fe5b906000526020600020900160005b6101000a815481600160a060020a030219169083600160a060020a03160217905550610790565b5b6001909101906106b8565b6003805460001901906107a390826114e4565b5060035460045411156107bc576003546107bc90610f24565b5b604051600160a060020a038416907f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9090600090a25b5b505b5050565b33600160a060020a03811660009081526002602052604090205460ff1615156108225760006000fd5b600082815260016020908152604080832033600160a060020a038116855292529091205483919060ff1615156108585760006000fd5b600084815260208190526040902060030154849060ff161561087a5760006000fd5b6000858152600160209081526040808320600160a060020a0333168085529252808320805460ff191690555187927ff6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e991a35b5b505b50505b5050565b60026020526000908152604090205460ff1681565b600160209081526000928352604080842090915290825290205460ff1681565b6000805b60055481101561097257838015610938575060008181526020819052604090206003015460ff16155b8061095c575082801561095c575060008181526020819052604090206003015460ff165b5b15610969576001820191505b5b60010161090f565b5b5092915050565b30600160a060020a031633600160a060020a031614151561099b5760006000fd5b600160a060020a038116600090815260026020526040902054819060ff16156109c45760006000fd5b81600160a060020a03811615156109db5760006000fd5b60038054905060010160045460328211806109f557508181115b806109fe575080155b80610a07575081155b15610a125760006000fd5b600160a060020a0385166000908152600260205260409020805460ff191660019081179091556003805490918101610a4a83826114e4565b916000526020600020900160005b8154600160a060020a03808a166101009390930a838102910219909116179091556040519091507ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d90600090a25b5b50505b505b505b50565b600080805b600354811015610b3d5760008481526001602052604081206003805491929184908110610adf57fe5b906000526020600020900160005b9054600160a060020a036101009290920a900416815260208101919091526040016000205460ff1615610b21576001820191505b600454821415610b345760019250610b3d565b5b600101610ab6565b5b5050919050565b6000805b600354811015610bbd5760008381526001602052604081206003805491929184908110610b7257fe5b906000526020600020900160005b9054600160a060020a036101009290920a900416815260208101919091526040016000205460ff1615610bb4576001820191505b5b600101610b49565b5b50919050565b6000602081905290815260409020805460018201546003830154600160a060020a0390921692909160029091019060ff1684565b610c00611538565b6003805480602002602001604051908101604052809291908181526020018280548015610c5657602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610c38575b505050505090505b90565b610c69611538565b610c71611538565b60006000600554604051805910610c855750595b908082528060200260200182016040525b50925060009150600090505b600554811015610d1f57858015610ccb575060008181526020819052604090206003015460ff16155b80610cef5750848015610cef575060008181526020819052604090206003015460ff165b5b15610d1657808383815181101515610d0457fe5b60209081029091010152600191909101905b5b600101610ca2565b878703604051805910610d2f5750595b908082528060200260200182016040525b5093508790505b86811015610d8a578281815181101515610d5d57fe5b9060200190602002015184898303815181101515610d7757fe5b602090810290910101525b600101610d47565b5b505050949350505050565b610d9e611538565b610da6611538565b6003546040516000918291805910610dbb5750595b908082528060200260200182016040525b50925060009150600090505b600354811015610ea05760008581526001602052604081206003805491929184908110610e0157fe5b906000526020600020900160005b9054600160a060020a036101009290920a900416815260208101919091526040016000205460ff1615610e97576003805482908110610e4a57fe5b906000526020600020900160005b9054906101000a9004600160a060020a03168383815181101515610e7857fe5b600160a060020a03909216602092830290910190910152600191909101905b5b600101610dd8565b81604051805910610eae5750595b908082528060200260200182016040525b509350600090505b81811015610f15578281815181101515610edd57fe5b906020019060200201518482815181101515610ef557fe5b600160a060020a039092166020928302909101909101525b600101610ec7565b5b505050919050565b60055481565b30600160a060020a031633600160a060020a0316141515610f455760006000fd5b600354816032821180610f5757508181115b80610f60575080155b80610f69575081155b15610f745760006000fd5b60048390556040805184815290517fa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a9181900360200190a15b5b50505b50565b33600160a060020a03811660009081526002602052604090205460ff161515610fdd5760006000fd5b6000828152602081905260409020548290600160a060020a031615156110035760006000fd5b600083815260016020908152604080832033600160a060020a038116855292529091205484919060ff16156110385760006000fd5b6000858152600160208181526040808420600160a060020a0333168086529252808420805460ff1916909317909255905187927f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef91a36108cc85611289565b5b5b50505b505b5050565b60006110af8484846113f1565b90506110ba81610fb4565b5b9392505050565b603281565b60045481565b600030600160a060020a031633600160a060020a03161415156110f05760006000fd5b600160a060020a038316600090815260026020526040902054839060ff16151561111a5760006000fd5b600160a060020a038316600090815260026020526040902054839060ff16156111435760006000fd5b600092505b6003548310156111eb5784600160a060020a031660038481548110151561116b57fe5b906000526020600020900160005b9054906101000a9004600160a060020a0316600160a060020a031614156111df57836003848154811015156111aa57fe5b906000526020600020900160005b6101000a815481600160a060020a030219169083600160a060020a031602179055506111eb565b5b600190920191611148565b600160a060020a03808616600081815260026020526040808220805460ff1990811690915593881682528082208054909416600117909355915190917f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9091a2604051600160a060020a038516907ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d90600090a25b5b505b505b505050565b600081815260208190526040812060030154829060ff16156112ab5760006000fd5b6112b483610ab1565b156107f2576000838152602081905260409081902060038101805460ff19166001908117909155815481830154935160028085018054959850600160a060020a03909316959492939192839285926000199183161561010002919091019091160480156113625780601f1061133757610100808354040283529160200191611362565b820191906000526020600020905b81548152906001019060200180831161134557829003601f168201915b505091505060006040518083038185876187965a03f192505050156113b15760405183907f33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed7590600090a26107f2565b60405183907f526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b7923690600090a260038201805460ff191690555b5b5b5b505050565b600083600160a060020a038116151561140a5760006000fd5b60055460408051608081018252600160a060020a0388811682526020808301898152838501898152600060608601819052878152808452959095208451815473ffffffffffffffffffffffffffffffffffffffff19169416939093178355516001830155925180519496509193909261148a92600285019291019061155c565b50606091909101516003909101805460ff191691151591909117905560058054600101905560405182907fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5190600090a25b5b509392505050565b8154818355818115116107f2576000838152602090206107f29181019083016115db565b5b505050565b8154818355818115116107f2576000838152602090206107f29181019083016115db565b5b505050565b60408051602081019091526000815290565b60408051602081019091526000815290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061159d57805160ff19168380011785556115ca565b828001600101855582156115ca579182015b828111156115ca5782518255916020019190600101906115af565b5b506115d79291506115db565b5090565b610c5e91905b808211156115d757600081556001016115e1565b5090565b905600a165627a7a72305820c448c69e347c3abb8b99582a039d132511a7c8645ff4c1b1727a555c8ebaf9050029000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000a2281b9f93938dfad300cba5b6d7c80e577df8b60000000000000000000000001b89dc1f25f6f7e018729c108040044d9eb25c1c0000000000000000000000002a9586ee7b36d472befe306715ad3ce43bb0ef1c000000000000000000000000a51da82f5041c36a91662869978354b47e2b7be6"
  },
  "token": {
    "abi": [{"inputs": [], "constant": true, "name": "name", "payable": false, "outputs": [{"type": "string", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "spender"}, {"type": "uint256", "name": "value"}], "constant": false, "name": "approve", "payable": false, "outputs": [{"type": "bool", "name": "success"}], "type": "function"}, {"inputs": [], "constant": true, "name": "totalSupply", "payable": false, "outputs": [{"type": "uint256", "name": "supply"}], "type": "function"}, {"inputs": [{"type": "address", "name": "from"}, {"type": "address", "name": "to"}, {"type": "uint256", "name": "value"}], "constant": false, "name": "transferFrom", "payable": false, "outputs": [{"type": "bool", "name": "success"}], "type": "function"}, {"inputs": [], "constant": true, "name": "decimals", "payable": false, "outputs": [{"type": "uint8", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}], "constant": true, "name": "balanceOf", "payable": false, "outputs": [{"type": "uint256", "name": "balance"}], "type": "function"}, {"inputs": [], "constant": true, "name": "symbol", "payable": false, "outputs": [{"type": "string", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "to"}, {"type": "uint256", "name": "value"}], "constant": false, "name": "transfer", "payable": false, "outputs": [{"type": "bool", "name": "success"}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}, {"type": "address", "name": "spender"}], "constant": true, "name": "allowance", "payable": false, "outputs": [{"type": "uint256", "name": "remaining"}], "type": "function"}, {"inputs": [{"indexed": true, "type": "address", "name": "from"}, {"indexed": true, "type": "address", "name": "to"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Transfer", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "owner"}, {"indexed": true, "type": "address", "name": "spender"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Approval", "anonymous": false}]
  },
  "multiSigDailyLimitFactory" : {
    "abi": [{"inputs": [{"type": "address", "name": ""}], "constant": true, "name": "isInstantiation", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [{"type": "address[]", "name": "_owners"}, {"type": "uint256", "name": "_required"}, {"type": "uint256", "name": "_dailyLimit"}], "constant": false, "name": "create", "payable": false, "outputs": [{"type": "address", "name": "wallet"}], "type": "function"}, {"inputs": [{"type": "address", "name": ""}, {"type": "uint256", "name": ""}], "constant": true, "name": "instantiations", "payable": false, "outputs": [{"type": "address", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "creator"}], "constant": true, "name": "getInstantiationCount", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"indexed": false, "type": "address", "name": "sender"}, {"indexed": false, "type": "address", "name": "instantiation"}], "type": "event", "name": "ContractInstantiation", "anonymous": false}]
  }
};
