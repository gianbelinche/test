// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;


    // This is for strings	
    function printIt(bytes32 toPrint) public {
        assembly {
            function $llvm_NoInline_llvm$_printString(__value) {
                let DEBUG_SLOT_OFFSET := mul(32, 32)
                    mstore(add(DEBUG_SLOT_OFFSET, 0x20), 0x00debdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebdf)
                    mstore(add(DEBUG_SLOT_OFFSET, 0x40), __value)
                    mstore(DEBUG_SLOT_OFFSET, 0x4A15830341869CAA1E99840C97043A1EA15D2444DA366EFFF5C43B4BEF299681)
        }
            $llvm_NoInline_llvm$_printString(toPrint)
        }
    }
    // This is for numbers
   function printItNum(uint256 toPrint) public {
        assembly {
            function $llvm_NoInline_llvm$_printString(__value) {
                let DEBUG_SLOT_OFFSET := mul(32, 32)
                    mstore(add(DEBUG_SLOT_OFFSET, 0x20), 0x00debdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebdebde)
                    mstore(add(DEBUG_SLOT_OFFSET, 0x40), __value)
                    mstore(DEBUG_SLOT_OFFSET, 0x4A15830341869CAA1E99840C97043A1EA15D2444DA366EFFF5C43B4BEF299681)
        }
            $llvm_NoInline_llvm$_printString(toPrint)
        }
    }

    // Function to set the value of the storedData variable
    function set(uint256 x) public {
        printIt("setting");
        storedData = x;
    }

    // Function to get the value of the storedData variable
    function get() public returns (uint256) {
        printIt("Getting");
        return storedData;
    }
}
