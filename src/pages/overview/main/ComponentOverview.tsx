import { useState } from "react";
import s from "./ComponentOverview.module.scss";
import graph from "../../../assets/graph.png";
import analysis from "../../../assets/analysis.png";
import risks from "../../../assets/risks.png";
type Props = {};

export const ComponentOverview = (props: Props) => {
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenWallet, setIsOpenWallet] = useState(false);

  const toggleEmailDropdown = () => {
    setIsOpenEmail(!isOpenEmail);
    setIsOpenWallet(false);
  };

  const toggleWalletDropdown = () => {
    setIsOpenWallet(!isOpenWallet);
    setIsOpenEmail(false);
  };

  return (
    <div className={s.content_overview}>
      <div className={s.ref}>
        <div className={s.ref_item} onClick={toggleEmailDropdown}>
          antonzhdanovich@gmail.com
          <div
            className={`${s.dropdown} ${isOpenEmail ? s.dropdown_active : ""}`}
          >
            <div
              className={s.dropdown_item}
              onClick={() =>
                navigator.clipboard.writeText("antonzhdanovich@gmail.com")
              }
            >
              Copy Wallet
            </div>
            <div className={s.dropdown_item}>Disconnect</div>
          </div>
        </div>

        <div className={s.ref_item} onClick={toggleWalletDropdown}>
          QUBqS-7t...kG-3U8
          <div
            className={`${s.dropdown} ${isOpenWallet ? s.dropdown_active : ""}`}
          >
            <div
              className={s.dropdown_item}
              onClick={() => navigator.clipboard.writeText("QUBqS-7t...kG-3U8")}
            >
              Copy Wallet
            </div>
            <div className={s.dropdown_item}>Disconnect</div>
          </div>
        </div>
      </div>

      <div className={s.top_container}>
        <div className={s.graph}>
          <img src={graph} alt="" />
        </div>

        <div className={s.analysis}>
          <h2 className={s.analysis_title}>Asset analysis</h2>
          <img src={analysis} alt="" />
          <div className={s.analysis_text_block}>
            <div className={s.analysis_text}>USDT/ETH</div>
            <div className={s.analysis_text}>USDT/WETH</div>
            <div className={s.analysis_text}>USDC/WBTC</div>
            <div className={s.analysis_text}>ETH/ARB</div>
          </div>
        </div>
      </div>
      <div className={s.bottom_container}>
        <div className={s.operations}>
          <h2 className={s.operations_title}>Recent operations</h2>

          <div className={s.operations_content}>
            <div className={s.operations_block}>
              <div className={s.operations_left_wrapper}>
                <div className={s.operations_name}>Deposit</div>
                <div className={s.operations_date}>01/01/2024</div>
              </div>
              <div className={s.operations_right_wrapper}>
                <div className={s.operations_price}>+ $750</div>
              </div>
            </div>
            <div className={s.operations_block}>
              <div className={s.operations_left_wrapper}>
                <div className={s.operations_name}>Withdrawal</div>
                <div className={s.operations_date}>07/10/2023</div>
              </div>
              <div className={s.operations_right_wrapper}>
                <div className={s.operations_price}>- $3500</div>
              </div>
            </div>
            <div className={s.operations_block}>
              <div className={s.operations_left_wrapper}>
                <div className={s.operations_name}>Deposit</div>
                <div className={s.operations_date}>15/06/2023</div>
              </div>
              <div className={s.operations_right_wrapper}>
                <div className={s.operations_price}>+ $1200</div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.assets}>
          <h2 className={s.assets_title}>Assets overview</h2>

          <div className={s.assets_content}>
            <div className={s.assets_block}>
              <div className={s.assets_block_title}>Asset</div>
              <div className={s.assets_block_item}>USDT/ETH</div>
              <div className={s.assets_block_item}>ETH/ARB</div>
              <div className={s.assets_block_item}>USDT/WETH</div>
              <div className={s.assets_block_item}>USDC/WBTC</div>
            </div>
            <div className={s.assets_block}>
              <div className={s.assets_block_title}>Balance</div>
              <div className={s.assets_block_item}>$4100</div>
              <div className={s.assets_block_item}>$750</div>
              <div className={s.assets_block_item}>$3500</div>
              <div className={s.assets_block_item}>$1200</div>
            </div>
            <div className={s.assets_block}>
              <div className={s.assets_block_title}>Price change</div>
              <div className={s.assets_block_item}>+0.02%</div>
              <div className={s.assets_block_item}>0.00%</div>
              <div className={s.assets_block_item}>+23.40%</div>
              <div className={s.assets_block_item}>+7.10%</div>
            </div>
            <div className={s.assets_block}>
              <div className={s.assets_block_title}>Allocation</div>
              <div className={s.assets_block_item}>45%</div>
              <div className={s.assets_block_item}>25%</div>
              <div className={s.assets_block_item}>17%</div>
              <div className={s.assets_block_item}>13%</div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.risks}>
        <img src={risks} alt="" />
      </div>
    </div>
  );
};
